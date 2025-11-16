# Object Oriented Programming - Refactorización

## Introducción

Partimos de una posible solución tras la aplicación de los conceptos de clean code, pero que aún está lejos de ser óptima.

**Además, a la solución propuesta se le han introducido a propósito algunos puntos débiles que permitirán aplicar los conceptos aprendidos en esta sección**

## Objetivo

🎯 Refactoriza el script original sin cambiar su comportamiento.
El resultado final debe ser un código fácil de leer, entender y mantener.

🚫 **En este ejercicio no debes aplicar otros principios ni patrones, sólo aplicar los conceptos de programación orientada a objetos mostradas en este módulo**

⏱ Duración estimada: 90 mins.

## Ejecución

- `npx ts-node --transpile-only src/clean-code/shipfast-clean-code.ts`

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

✅ Aplicar Encapsulamiento (datos y comportamiento juntos)
✅ Aplicar Abstracción (clases base abstractas)
✅ Aplicar Herencia (jerarquía de clases)
✅ Aplicar Polimorfismo (mismo método, diferentes implementaciones)

### 🎯 Pistas para empezar

Identifica y abstrae las entidades del dominio:

- ¿Qué es un "Shipment" (Envío)?
- ¿Qué es un "Customer" (Cliente)?
- ¿Hay diferentes TIPOS de Shipment? (Standard, Express, SameDay)
- ¿Hay diferentes TIPOS de Customer? (Premium, Regular)

Piensa en la jerarquía:
Shipment (abstracta)
├─ StandardShipment
├─ ExpressShipment
└─ SameDayShipment

Customer (abstracta)
├─ PremiumCustomer
└─ RegularCustomer

¿Qué métodos deberían tener?

Shipment → calculatePrice() (polimórfico)
Customer → applyDiscount(price) (polimórfico)

### Proceso sugerido

Paso 1: Crear clase base abstracta Shipment
Paso 2: Crear clases hijas: StandardShipment, ExpressShipment, SameDayShipment
Paso 3: Crear clase base abstracta Customer
Paso 4: Crear clases hijas: PremiumCustomer, RegularCustomer
Paso 5: Crear una clase para orquestar entregas (pensar un buen nombre)
Paso 6: Crear clase para generar el reporte (pensar un buen nombre)
