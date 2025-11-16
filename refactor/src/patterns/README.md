# Object Oriented Programming - Refactorización

## Objetivo

🎯 Refactoriza el script original sin cambiar su comportamiento.
El resultado final debe ser un código fácil de leer, entender y mantener.

🚫 **En este ejercicio no debes aplicar otros principios ni patrones, sólo aplicar los conceptos de programación orientada a objetos mostradas en este módulo**

⏱ Duración estimada: 90 mins.

## Ejecución

- `npx ts-node --transpile-only src/patterns/shipfast-solid.ts`

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

Objetivos de esta iteración:

✅ Aplicar Factory Pattern: Encapsular la creación de objetos complejos
✅ Aplicar Strategy Pattern: Encapsular algoritmos intercambiables

🎯 Pistas para empezar:

Problemas actuales:

En main() tenemos que crear manualmente cada calculadora
Tenemos que saber QUÉ calculadora usar para cada tipo
Si añadimos un nuevo tipo, hay que modificar main()
El código de creación está acoplado al código de uso

Factory Pattern - ¿Dónde aplicarlo?

Problema: Crear Shipment requiere saber qué calculator usar
Solución: ShipmentFactory
├─ createStandard()
├─ createExpress()
└─ createSameDay()

Problema: Crear Customer requiere saber qué calculator usar
Solución: CustomerFactory
├─ createPremium()
└─ createRegular()

```

3. **Strategy Pattern - ¿Dónde aplicarlo?**
```

Ya lo tenemos parcialmente implementado con:

- IPriceCalculator (Strategy)
- IDiscountCalculator (Strategy)

Pero podemos mejorarlo con un contexto más explícito:

- PricingContext (usa diferentes strategies)

Proceso sugerido:

Paso 1: Crear ShipmentFactory con métodos para cada tipo
Paso 2: Crear CustomerFactory con métodos para cada tipo
Paso 3: (Opcional) Refinar Strategy con un contexto explícito
Paso 4: Simplificar main() usando las factories
