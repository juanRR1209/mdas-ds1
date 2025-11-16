# Introducción

## Instalar proyecto

Para instalar las dependencias de un proyecto en NodeJs se ejecuta el comando

> npm install

## Ejecutar scripts de NodeJs

1. `node mi-script.ts`
   👉 Usa el runtime estándar de NodeJs

Ejecuta archivos JavaScript, **no TypeScript**. Node no entiende TypeScript nativamente — si intentas ejecutar .ts con el comando `node`, fallará en el momento que encuentro código en TypeScript

2. `ts-node mi-script.ts`
   👉 Usa el transpiler de TypeScript (typescript package) internamente
   ⚠️ Requiere tener instalados **globalmente** los paquetes de NodeJs `ts-node` y `typescript`

Ejecuta directamente archivos TypeScript sin compilarlos manualmente (no crea un archivo `mi-script.js`). Fallará si encuentra un error de Typescript acorde con las reglas especificadas en el archivo `tsconfig.json`

> npm install --save-dev ts-node typescript -g

3. `npx ts-node mi-script.ts`
   👉 `npx` ejecuta un binario local de node_modules/.bin sin necesidad de instalarlo globalmente.
   ⚠️ Requiere tener instalados **globalmente** los paquetes de NodeJs `ts-node` y `typescript`

Útil si ts-node está en las dependencias del proyecto. És el comando más común en proyectos TypeScript modernos. También fallará si encuentra un error de Typescript acorde con las reglas especificadas en el archivo `tsconfig.json`

## Ejecutar scripts de Typescript sin verificación

Para ejecutar un script de Typescript realizando sólo el proceso de trandpilación, evitando asi la comprobación de tipos, ejecutar el comando:

`npx ts-node --transpile-only mi-script.ts`
