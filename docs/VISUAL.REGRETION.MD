# Guía Paso a Paso para Ejecutar Pruebas de Regresión con Resemble JS en Ghost

## Contexto

Este proceso se enfoca en ejecutar pruebas de regresión visual entre dos versiones de la plataforma Ghost:

- **Versión 5.9**: Las pruebas están organizadas en la carpeta `cypres-e2e/cypres-ghost-v4`.
- **Versión 4.5**: Las pruebas están organizadas en la carpeta `cypres-e2e/cypres-ghost-v5`.

El objetivo es ejecutar las pruebas para ambas versiones utilizando Cypress y luego comparar las capturas de pantalla generadas en cada paso mediante Resemble JS.

## Requisitos Previos

1. **Ejecución de escenarios con screenshots**  
   Para poder realizar las pruebas de regresión visual se deben ejecutar antes los escenarios con las dos versiones de Ghost, si no los ha realizado puede encontrar el paso a paso en el archivo **'E2E.TESTING.MD'**.

## Requisitos de sistema

1. **Node.js** : Instala la versión LTS de Node.js desde [https://nodejs.org/](https://nodejs.org/).
2. **Canvas** :Instalar la dependencia en el sistema para poder ejecutar las pruebas con ResembleJS. Las instrucciones de instalación las puede encontrar en [https://www.npmjs.com/package/canvas](https://www.npmjs.com/package/canvas)


---

## Pasos para Ejecutar las Pruebas de regresión con Resemble JS

### 1. Ubicarse en la raíz del proyecto e instalar de dependencias
Se debe ubicar en la raíz del proyecto por medio de la consola e instalar las dependencias con el siguiente comando:
```
npm install
```

### 2. Ubicar el archivo de ejecución
En la raíz del proyecto se encuentra un archivo llamado **'/vr-resemble.js'** este archivo contiene el código necesario para realizar las pruebas con la herramiento ResembleJs.

### 3. Ejecutar las pruebas
Para correr las pruebas debe estar ubicado en la carpeta raiz del proyecto por medio de la consola y debe ejecutar el siguiente comando:
```
npm run test
```
Este comando internamente está configurado para llamar al archivo **'vr-resemble.js'** y ejecutar las pruebas con node.

### 4. Resultados de las pruebas
Al finalizar la ejecución de pruebas se genera de forma automática un directorio llamado output_differences, el cual contiene las carpetas de las imagenes comparadas que se encontraron en las dos ejecuciones de E2E, también se encuentra un archivo HTML que muestra el reporte de los resultados de la prueba.

### 5. Informe de resultados HTML
El informe de resultados en HTML contiene una tabla con el nombre del archivo comparado, la imagen de la ejecución en la versión Ghost 4.5, la imagen de la ejecución en la versión Ghost 5.9, la imagen que refleja las diferencias, el porcentaje de diferencia encontrado y el tiempo de ejecución.
