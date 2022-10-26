## Algorithms Robert Sedgewick, Kewin Wayne.

La idea es adaptar los ejercicios del Libro Algorithms a Typescript.

## Pasos que he realizado para configurar el proyecto con Typescript:

Iniciamos el proyecto como cualquier otro:

```
git init
npm init
```

Agregamos TS para el proyecto:

```
npm install typescript -D
yarn add typescript --dev
npx tsc --version //Para comprobar que se ha instalado correctamente.
```

Si acaso necesitaras actualizar tu typescript global porque no está al día o lo que sea, te dejo el siguiente comando:

```
npm install -g typescript@latest
```

Esto porque a veces npm update nos dice que todo está al día, yo trabajaré con el typescript global y te dejo esto por si también es tu caso.

### editor.config

Para que funcione en VS instamos el plugin :EditorConfig for VS Code

```
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

Si quieremos correr un archivo .ts sin compilarlo previamente con tsc, la dependency por excelencia es “ts-node”.
pueden instalarlo igual como

```
npm i ts-node -D
```

y luego con npx:

```
npx ts-node index.ts
```

Comando para iniciar el proyecto

```
npx tsc --init
```

## Activando poderes de TypeScript en JavaScript 🧐

Si estás en Visual Studio Code, puedes activar el analizador de código estático de TypeScript sobre un archivo JavaScript. Para esto, en la primera línea del archivo debe ir lo siguiente:

//@ts-check

El análisis de código estático nos ayudará a detectar fallas en nuestro programa durante su desarrollo.

Con la extension Error Lens observamos las sugerencias de código.

# Compilador de Typescript:

Los navegadores sólo reconocen Javascript, Node tampoco corre nativamente typescript.Lo que hacemos es transpilar nuestros archivos ts en tsc que los lleva a Vanilla JS.

para traspilar un archivo:

```
npx tsc src/01-hello.ts
```

esto crea un nuevo archivo hello.js

Cuando transpilamos demoTStoCompile.ts nos arroja errores por que se llevan a un ES3 por default, para definir que target queremos ejecutamos:

```
npx tsc src/demoTStoCompile.ts --target es5
npx tsc src/demoTStoCompile.ts --target es6
```

Ahora sin problemas los transpila a versiones más nuevas.

### dist

esta carpeta será donde tendrán lugar nuestas traspilaciones:

```
npx tsc src/demoTStoCompile.ts --target es6 --outDir dist
```

Usando una expresion regular para todos los archivos:

```
npx tsc src/*.ts --target es6 --outDir dist
```

al ejecutar podemos tener este error:

```
error TS6053: File 'src/*.ts' not found.
  The file is in the program because:
    Root file specified for compilation
```

Se resuelve creando un archivo tsconfig.json.

### Ahorrando trabajo:

Configuramos el tsconfig.json:

### Pasos:

1. Posicionate en el directorio raíz de tu proyecto.
2. Ejecutar el comando `npx tsc --init`.Esto creará el archivo **tsconfig.json.**
3. Ejecutar el comando `npx tsc -p ./ -w`
   1. Esto compilará en el mismo directorio todos tus archivos .ts
   2. Para modificar el target o el destino de los archivos compilados, en el archivo tsconfig.json busca el flag “outDir” y modificala para que quede así: `"outDir": "./dist",`**.**

Listo, ya tienes configurado lo necesario para seguir el curso tal cual (hasta el momento).

**Nota:** El tsconfig ya viene configurado para compilar a ES6, en caso de que quieras cambiar, busca la línea “target” y modifícala con el valor que necesites.

Si además del outDir que configuramos antes, configuramos el "rootDir: "./src", de ahora en mas vamos a poder compilar todos nuestros archivos a TypeScript con el siguiente comando:

```
npx tsc --watch
```

--wath hace que Typescript se quede escuchando los archivos.

Luego de transpilados nuestros archivos ahora podemos ejecutarlos con node por ejemplo:

```
node dist/01-hello.js
```
