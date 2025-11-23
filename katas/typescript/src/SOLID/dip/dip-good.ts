// Cumplimiento del DIP: Módulos de alto y bajo nivel dependen de la abstracción
// ✅ Solución: Introducir interfaz de la que ambos módulos dependan

// ✅ Abstracción de la que ambos módulos dependen
interface Database {
  save(data: string): void;
}

// ✅ Módulos de bajo nivel implementan la abstracción
class MySQLDatabase implements Database {
  public save(data: string): void {
    console.log(`Guardando en MySQL: ${data}`);
  }
}

class PostgreSQLDatabase implements Database {
  public save(data: string): void {
    console.log(`Guardando en PostgreSQL: ${data}`);
  }
}

class MongoDatabase implements Database {
  public save(data: string): void {
    console.log(`Guardando en MongoDB: ${data}`);
  }
}

// ✅ Módulo de alto nivel depende de la abstracción, no de la implementación concreta
class OrderService {
  private database: Database; // ✅ ¡Depende de la interfaz!

  constructor(database: Database) {
    this.database = database;
  }

  public processOrder(orderId: string): void {
    console.log(`Procesando pedido ${orderId}`);

    // ✅ ¡Puede trabajar con CUALQUIER implementación de base de datos!
    this.database.save(`Pedido ${orderId} procesado`);
  }
}

// ✅ Beneficios: Fácil de intercambiar bases de datos, probar y extender
console.log("=== Uso Cumpliendo el DIP ===");

const mysqlDb = new MySQLDatabase();
const postgresDb = new PostgreSQLDatabase();
const mongoDb = new MongoDatabase();

// ¡El mismo OrderService funciona con diferentes bases de datos! ✅
const orderService1 = new OrderService(mysqlDb);
const orderService2 = new OrderService(postgresDb);
const orderService3 = new OrderService(mongoDb);

orderService1.processOrder("001");
orderService2.processOrder("002");
orderService3.processOrder("003");

// UserService for test compatibility
interface User {
  email: string;
  name: string;
}

class UserService {
  private database: Database;
  private users: User[] = [];

  constructor(database: Database) {
    this.database = database;
  }

  public saveUser(email: string, name: string): string {
    const user = { email, name };
    this.users.push(user);
    const dbType = this.database instanceof MySQLDatabase ? "MySQL" : this.database instanceof MongoDatabase ? "MongoDB" : "PostgreSQL";
    const result = `Guardado en ${dbType}: ${email}`;
    this.database.save(result);
    return result;
  }

  public getUser(email: string): User | undefined {
    return this.users.find((u) => u.email === email);
  }
}

// Re-export MongoDatabase as MongoDBDatabase for backwards compatibility
const MongoDBDatabase = MongoDatabase;

export { Database, MySQLDatabase, PostgreSQLDatabase, MongoDatabase, MongoDBDatabase, OrderService, UserService };
