# SOLID - Refactorización

## Introducción

Partimos de una posible solución tras la aplicación de los principios de la OOP, pero que aún está lejos de ser óptima.

**Además, a la solución propuesta se le han introducido a propósito algunos puntos débiles que permitirán aplicar los conceptos aprendidos en esta sección**

## Objetivo

🎯 Refactoriza el script original sin cambiar su comportamiento.
El resultado final debe ser un código fácil de leer, entender y mantener.

🚫 **En este ejercicio no debes aplicar otros principios ni patrones distintos a los proncipios SOLID mostrados en este módulo**

⏱ Duración estimada: 90 mins.

## Ejecución

- `npx ts-node --transpile-only src/solid/shipfast-oop.ts`

```console
=== SHIPFAST REPORT ===
Total shipments: 5
---
Shipment #1 | Type: std | Price: $11.50 | Discount: $1.72 | Final: $9.78
Shipment #2 | Type: exp | Price: $39.60 | Discount: $0.00 | Final: $39.60
Shipment #3 | Type: std | Price: $15.50 | Discount: $3.10 | Final: $12.40
Shipment #4 | Type: sme | Price: $6.70 | Discount: $0.00 | Final: $6.70
Shipment #5 | Type: exp | Price: $23.00 | Discount: $3.45 | Final: $19.55
---
Total Revenue: $88.02
Total Discounts: $8.28
======================
```

## Objetivos de esta iteración

✅ Single Responsibility Principle (SRP): Una clase, una razón para cambiar
✅ Open/Closed Principle (OCP): Abierto a extensión, cerrado a modificación
✅ Dependency Inversion (DI):

### 🎯 Pistas para empezar:

Viola SRP:

- `Order` está haciendo demasiadas cosas: calcula precios y aplica descuentos.
- `ShipmentProcessor` procesa y almacena órdenes.

Viola OCP:

- No podemos cambiar las reglas de cálculo del envio sin modificar las clases `Shipment`
- No podemos cambiar las reglas de cálculo del descuento por cliente sin modificar las clases `Customer`

Soluciones sugeridas:
Para SRP:

Extraer un `PriceCalculator` (responsable solo de calcular precios)
Extraer un `DiscountCalculator` (responsable solo de aplicar descuentos)
Extraer `OrderRepository` (responsable solo de almacenar órdenes)

Para OCP:

Crear interfaces: `IPriceCalculator`, `IDiscountCalculator`
Inyectar dependencias en vez de hardcodear
Ahora puedes añadir nuevas calculadoras SIN modificar código existente

Proceso sugerido:

Paso 1: Extraer PriceCalculator e interface IPriceCalculator
Paso 2: Crear calculadoras concretas por tipo de envío
Paso 3: Extraer DiscountCalculator e interface IDiscountCalculator
Paso 4: Crear calculadoras de descuento por tipo de cliente
Paso 5: Simplificar Order (solo datos + cálculo)
Paso 6: Separar OrderRepository de ShipmentProcessor
