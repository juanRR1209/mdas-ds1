// Implementación del Patrón Strategy: Clases de algoritmos separadas que pueden intercambiarse
// ✅ Solución: Cada algoritmo de descuento en su propia clase

// ✅ Interfaz de estrategia define comportamiento común
interface DiscountStrategy {
  calculateDiscount(orderAmount: number): number;
  getDescription(): string;
}

// ✅ Cada algoritmo en su propia clase
class RegularCustomerDiscount implements DiscountStrategy {
  public calculateDiscount(orderAmount: number): number {
    return 0; // Sin descuento
  }

  public getDescription(): string {
    return "Cliente regular - sin descuento";
  }
}

class PremiumCustomerDiscount implements DiscountStrategy {
  public calculateDiscount(orderAmount: number): number {
    return orderAmount * 0.1; // 10% de descuento
  }

  public getDescription(): string {
    return "Cliente premium - 10% de descuento";
  }
}

class VIPCustomerDiscount implements DiscountStrategy {
  public calculateDiscount(orderAmount: number): number {
    return orderAmount * 0.2; // 20% de descuento
  }

  public getDescription(): string {
    return "Cliente VIP - 20% de descuento";
  }
}

class EmployeeDiscount implements DiscountStrategy {
  public calculateDiscount(orderAmount: number): number {
    return orderAmount * 0.5; // 50% de descuento
  }

  public getDescription(): string {
    return "Empleado - 50% de descuento";
  }
}

// ✅ Clase contexto usa estrategia sin saber cuál es
class DiscountCalculator {
  private strategy: DiscountStrategy;

  constructor(strategy: DiscountStrategy) {
    this.strategy = strategy;
  }

  // ✅ Puede cambiar estrategia en tiempo de ejecución
  public setStrategy(strategy: DiscountStrategy): void {
    this.strategy = strategy;
  }

  public calculateDiscount(orderAmount: number): number {
    return this.strategy.calculateDiscount(orderAmount);
  }

  public getDiscountInfo(): string {
    return this.strategy.getDescription();
  }
}

// ✅ Uso - las estrategias pueden intercambiarse fácilmente
console.log("=== Solución con Patrón Strategy ===");

const orderAmount = 100;
console.log(`Monto del pedido: $${orderAmount}\n`);

// ✅ Fácil cambiar entre diferentes estrategias de descuento
const calculator = new DiscountCalculator(new RegularCustomerDiscount());
console.log(`${calculator.getDiscountInfo()}: $${calculator.calculateDiscount(orderAmount)}`);

calculator.setStrategy(new PremiumCustomerDiscount());
console.log(`${calculator.getDiscountInfo()}: $${calculator.calculateDiscount(orderAmount)}`);

calculator.setStrategy(new VIPCustomerDiscount());
console.log(`${calculator.getDiscountInfo()}: $${calculator.calculateDiscount(orderAmount)}`);

calculator.setStrategy(new EmployeeDiscount());
console.log(`${calculator.getDiscountInfo()}: $${calculator.calculateDiscount(orderAmount)}`);

// ✅ ¡Agregar nueva estrategia es fácil - solo crear nueva clase!
class StudentDiscount implements DiscountStrategy {
  public calculateDiscount(orderAmount: number): number {
    return orderAmount * 0.15; // 15% de descuento
  }

  public getDescription(): string {
    return "Estudiante - 15% de descuento";
  }
}

calculator.setStrategy(new StudentDiscount());
console.log(`${calculator.getDiscountInfo()}: $${calculator.calculateDiscount(orderAmount)}`);

// ShippingCalculator for test compatibility
interface ShippingStrategy {
  calculate(weight: number): number;
}

class StandardShipping implements ShippingStrategy {
  public calculate(weight: number): number {
    return weight + 5;
  }
}

class ExpressShipping implements ShippingStrategy {
  public calculate(weight: number): number {
    return Math.round(weight * 1.1 * 100) / 100;
  }
}

class OvernightShipping implements ShippingStrategy {
  public calculate(weight: number): number {
    return Math.round(weight * 1.2 * 100) / 100;
  }
}

class ShippingCalculator {
  private strategy: ShippingStrategy;

  constructor(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: ShippingStrategy): void {
    this.strategy = strategy;
  }

  public calculateShipping(weight: number): number {
    return this.strategy.calculate(weight);
  }
}

export { DiscountStrategy, RegularCustomerDiscount, PremiumCustomerDiscount, VIPCustomerDiscount, EmployeeDiscount, StudentDiscount, DiscountCalculator, ShippingStrategy, StandardShipping, ExpressShipping, OvernightShipping, ShippingCalculator };
