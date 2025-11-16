# Clean Code - Refactorización

## Contexto

Acabas de unirte al equipo de desarrollo de ShipFast, de una empresa que gestiona envíos urgentes.

Un antiguo compañero escribió un pequeño script para procesar entregas y calcular descuentos según el tipo de cliente.

El código cumple su función, pero está lejos de cumplir con los estándares de calidad actuales del equipo.

Tu misión es refactorizarlo aplicando las buenas prácticas que progresivamente estás estudiando.

## Introducción

El objetivo es tomar un código existente que "funciona" y transformarlo en un código limpio, legible y mantenible.

Esta es una situación muy común en el mundo real: heredar código escrito con prisas, sin una estructura clara, con nombres poco expresivos y funciones que hacen demasiadas cosas.

Como desarrollador responsable, tu tarea no será solo "hacer que funcione", sino hacer que tenga sentido, para ti y para quienes trabajen contigo en el futuro.

## Objetivo

🎯 Refactoriza el script original sin cambiar su comportamiento.
El resultado final debe ser un código fácil de leer, entender y mantener.

🚫 **En este ejercicio no debes aplicar otros principios ni patrones, sólo aplicar las técnicas de clean code mostradas en este módulo**

⏱ Duración estimada: 90 mins.

## Ejecución

- `npx ts-node --transpile-only src/clean-code/shipfast-legacy.ts`

Añadimos `--transpile-only` ya que no queremos que el proceso evalue la comprobación del tipado, ya que falla debido a quese trata de un código de baja calidad.

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

✅ Mejorar el naming (nombres descriptivos)
✅ Extraer funciones con responsabilidad única
✅ Eliminar números mágicos
✅ Mejorar el formato vertical (separación lógica)
✅ Añadir tipos de TypeScript apropiados
✅ Eliminar comentarios innecesarios (el código debe autoexplicarse)

### 🎯 Pistas para empezar

- Identifica las variables crípticas: ¿Qué significan realmente?
- Números mágicos: 5, 2, 0.01, 10, 0.2 → Deberían ser constantes con nombres
- Identifica bloques de código que hacen una cosa: ¿Hay código que calcula precios? ¿Hay código que aplica descuentos? ¿Hay código que genera reportes?

### Proceso sugerido

Paso 1: Renombrar TODAS las variables
Paso 2: Crear constantes para los números mágicos
Paso 3: Crear tipos TypeScript para los datos
Paso 4: Extraer las funciones para calcular el precio, descuentos y generar reportes (recuerda las reglas para funciones)
