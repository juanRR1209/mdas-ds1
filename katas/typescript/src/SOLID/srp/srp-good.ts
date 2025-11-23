// Cumplimiento del SRP: Cada clase tiene una única responsabilidad
// Solución: Clases separadas para diferentes responsabilidades

interface User {
  name: string;
  email: string;
}

class UserClass implements User {
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  // Solo gestión de datos de usuario aquí ✅
  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }
}

// Clase separada para operaciones de email ✅
class EmailService {
  public sendWelcomeEmail(email: string): boolean {
    console.log(`Enviando email de bienvenida a ${email}`);
    return true;
  }

  public sendPasswordResetEmail(email: string): string {
    return `Enviando email de restablecimiento de contraseña a ${email}`;
  }
}

// Clase separada para operaciones de archivos ✅
class UserFileManager {
  public saveToFile(user: User): string {
    return `Guardando usuario ${user.name} en archivo`;
  }

  public loadFromFile(fileName: string): string {
    return `Cargando datos de usuario desde ${fileName}`;
  }
}

// Ejemplo de uso
const user: User = { name: "Juan Pérez", email: "juan@ejemplo.com" };
const emailService = new EmailService();
const fileManager = new UserFileManager();

// Cada servicio maneja su propia responsabilidad
emailService.sendWelcomeEmail(user.email);
fileManager.saveToFile(user);

// Beneficios:
// 1. Cada clase tiene solo una razón para cambiar
// 2. Fácil de probar responsabilidades individuales
// 3. Se pueden reutilizar servicios para diferentes tipos de usuario
// 4. El código está más organizado y es más mantenible

class UserRepository {
  private users: User[] = [];

  public save(user: User): void {
    this.users.push(user);
  }

  public findByEmail(email: string): User | undefined {
    return this.users.find((u) => u.email === email);
  }
}

class UserValidator {
  public isValidEmail(email: string): boolean {
    return email.includes("@");
  }

  public isValidName(name: string): boolean {
    return name.trim().length > 0;
  }
}

export { User, EmailService, UserFileManager, UserRepository, UserValidator };
