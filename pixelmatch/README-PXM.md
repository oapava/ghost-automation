# Guía Paso a Paso para Ejecutar Pruebas de Regresión con PixelMatch en Ghost

## Contexto

Este proceso se enfoca en ejecutar pruebas de regresión visual entre dos versiones de la plataforma Ghost:

- **Versión 5.9**: Las pruebas están organizadas en la carpeta `kraken-e2e-rc`.
- **Versión 4.5**: Las pruebas están organizadas en la carpeta `kraken-e2e-base`.

El objetivo es ejecutar las pruebas para ambas versiones utilizando Kraken y luego comparar las capturas de pantalla generadas en cada paso mediante PixelMatch.

## Requisitos Previos

1. **Dependencias Instaladas**  
   Asegúrate de haber instalado las dependencias necesarias en ambas carpetas. Cada carpeta (`kraken-e2e-rc` y `kraken-e2e-base`) contiene un archivo `README` con instrucciones detalladas sobre cómo instalar las dependencias. Sigue esos pasos antes de continuar.

2. **Node.js**  
   Es necesario tener Node.js (versión 16) instalado en tu sistema, ya que Kraken depende de esta versión para funcionar.

3. Las instalaciones de Ghost 4.5 y 5.96 deben estar corriendo en puertos diferentes para que los escenarios de pruebas puedan ser ejecutados por medio de un script unico. La configuracion por defecto es Ghost 4.5 por el puerto 2368 y Ghost 4.96 por el puerto 2369. Si desea modificar estos parametros debe hacerlo dentro de las carpetas `kraken-e2e-base` y `kraken-e2e-rc` en el archivo **properties.json**. En este mismo archivo se debe ingresar el usuario y contraseña que tiene configurado en Ghost.

---

## Pasos para Ejecutar las Pruebas

### 1. Instalar Dependencias

Antes de ejecutar las pruebas, asegúrate de que todas las dependencias estén instaladas. Puedes hacerlo ejecutando el siguiente comando en la raíz del proyecto:

    npm run pixelmatch:installNPM

o en windows puedes usar

      windows:pixelmatch:installNPM
   
## 2. Limpiar las Capturas de Pantalla Anteriores

Antes de ejecutar las pruebas, es importante limpiar las capturas de pantalla anteriores para evitar confusiones. En la consola debes ubucarte en la carpeta `/pixelmatch` que se encuentra en la raiz del proyecto y ejecuta el siguiente comando:

    npm run clean:bitmaps

o en windows puedes usar

      windows:clean:bitmaps

Este script eliminará las carpetas de capturas de pantalla anteriores y creará nuevas carpetas vacías para almacenar las capturas generadas durante la prueba.


## 3. Ejecutar el Comando de Pruebas

Ahora puedes ejecutar el siguiente comando para iniciar las pruebas y la comparación de imágenes:

    npm run test:all

o en windows puedes usar

      windows:test:all

### 3.1 Explicacion de la ejecucion (se realiza automaticamente con el comando npm run test:all)

### 3.2 Ejecución de Pruebas version 4.5
Ejecuta las pruebas de la versión 4.5 de Ghost para generar las capturas de pantalla de referencia. Esto se realiza mediante el siguiente comando:

    cd.. && cd kraken-e2e-base && npx kraken-node run

### 3.3 Ejecución de Pruebas version 5.9

Luego, ejecuta las pruebas de la versión 5.9 de Ghost para generar capturas de pantalla actualizadas. Esto se realiza con el comando:

    cd.. && cd kraken-e2e-rc && npx kraken-node run

### 3.4 Comparación de Capturas de Pantalla

Finalmente, PixelMatch compara automáticamente las capturas de ambas versiones y genera un reporte visual con las diferencias encontradas. Esto se realiza con el siguiente comando:

    cd.. && cd pixelmatch && node compare.mjs

## Resultados y Reporte

Después de ejecutar `npm run test:all`, PixelMatch generará un reporte visual con las diferencias encontradas entre las capturas de pantalla de ambas versiones. Este reporte te permitirá identificar cualquier regresión visual en la plataforma Ghost.

### Directorios de Salida

Las capturas y reportes se almacenan automáticamente en los siguientes directorios configurados dentro de cada carpeta:

- `bitmaps_reference`: Contiene las capturas de pantalla de referencia (versión 4.5).
- `bitmaps_test`: Contiene las capturas de pantalla actuales (versión 5.9).
- `reports`: Contiene las imagenes de las diferencias identificadas y un archivo HTML con el resumen del reporte.

### Archivo de Reporte HTML

En la carpeta `reports`, se genera un archivo HTML que resume los resultados de la comparación. Este archivo es interactivo y muestra las diferencias visuales detectadas entre ambas versiones, facilitando la revisión de las regresiones visuales.

---

## Notas Adicionales

- **Eliminación previa**: Asegúrate de eliminar las capturas de pantalla previas antes de ejecutar nuevas pruebas para evitar confusiones.
- **Archivos README**: Si encuentras problemas, revisa los archivos `README` en cada carpeta para verificar que todas las dependencias estén correctamente instaladas.
- **Tolerancia a errores**: Si algún script falla, el proceso continuará gracias a la instrucción `|| echo 'El script falló pero seguimos adelante.'`, lo que te permitirá identificar problemas sin interrumpir todo el flujo de trabajo.
