# Cypress Testing Guide | Ghost V4

Este documento describe los pasos necesarios para configurar y ejecutar las pruebas de Cypress en este proyecto.

---
## Requisitos previos
Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:
1. **Node.js**: Instala la versión LTS de Node.js desde [https://nodejs.org/](https://nodejs.org/).
2. **npm o Yarn**: Una herramienta para gestionar paquetes (npm viene con Node.js).
3. **Cypress**: Ya debería estar instalado. Si no lo tienes instalado, sigue las instrucciones de instalación más adelante.
---
## Instalación
1. Clona el repositorio en tu máquina local:
   Si utilizas SSH:
   ```
   git clone git@github.com:oapava/ghost-automation.git
   cd ghost-automation
   ```
   Si utilizas HTTPS:
   ```
   git clone https://github.com/oapava/ghost-automation.git
   cd ghost-automation
   ```
2. Verifica que Cypress esté instalado. Si no, se debe instalar manualmente:
   Verificación con el comando, si la lína de comandos arroja la versión (Cypress Packege, Cypress Binary), entonces está instalado.
   ```
   cypress -v
   ```
   Si no está instalado, abra una terminal y ejecute el siguiente comando:
   ```
   npm install -g cypress
   ```
   O, si usas Yarn:
   ```
   yarn add cypress --dev
   ```
3. Puntos a considerar antes de ejecutar las pruebas:
    * El repositorio cuenta con dos carpetas para versiones diferentes de Ghost, asegúrate antes de correr las pruebas que Ghost se esté ejecutando en la version que se va a probar. Para la versión V5.96 de Ghost las pruebas están alojadas en cypress-e2e/cypress-ghost-v5. Para la versión V4.5 de Ghost las pruebas están alojadas en cypress-e2e/cypress-ghost-v4.
    * Dentro de cada carpeta de pruebas existe un archivo `cypress.config.js` en el cual se debe configurar el usuario de Ghost y la url con los puertos por donde esta corriendo cada una de las aplicaciones Ghost.
4. Ejecutar Cypress:

    * Ejecutar Cypress por consola:
    Desde una terminal ubíquese en el directorio raíz del proyecto y vaya a la carpeta **'cypress-e2e'**, alli tendra dos subcarpetas ('cypress-ghost-v5' y 'cypress-ghost-v4') que debe seleccionar dependiendo de la version de Ghost que se va a probar. Desde la consola ingrese a la version a probar y ubíquese en el directorio donde se encuntra el archivo  `cypress.config.js`, desde alli ejecuta el siguiente comando:
   ```
   cypress run --headless
   ```
   Esto lanzará Cypress en modo headless e iniciara la ejecucion de la pruebas. Al finalizar en la terminal se mostrara un resumen y resultado    de las pruebas ejecutadas. 


## Capturas de Pantalla

Al finalizar cada una de las ejecuciones de pruebas la herramienta deja un registro visual de cada uno de los pasos ejecutados en los escenarios, en el directorio **'screenshots'**. 