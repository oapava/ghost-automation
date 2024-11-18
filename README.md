# Participantes en la integración
- Omar Pava | o.pava@uniandes.edu.co
- Harold Virguez | h.virgueze@uniandes.edu.co
- Pablo Rivera | p.riverah@uniandes.edu.co
- Edwin Cruz | e.cruzs@uniandes.edu.co

# Instrucciones generales:

Para la ejecución de las pruebas se agregaron archivos de instrucciones específicos para cada segmento de pruebas con las instrucciones puntuales para cada ejecución. 

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

## Pruebas E2E + Pruebas de regresión visual( Cypress + ResembleJS ) 
Para ejecutar las 20 pruebas e2e sobre la version Ghost 5.96, las 5 pruebas e2e sobre las version Ghost 4.5 y las 5 pruebas de regresion visual con estas herramientas se deben seguir los siguientes pasos:

#### Requisitos previos
Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

* **Node.js**: Instala la versión LTS de Node.js desde [https://nodejs.org/](https://nodejs.org/).
* **npm o Yarn**: Una herramienta para gestionar paquetes (npm viene con Node.js).
* **Cypress**: Herramienta usada para pruebas e2e. Si no lo tienes instalado puedes hacerlo mediante consola ejecutando el comando `npm install -g cypress`
* **Canvas** :Instalar la dependencia en el sistema para poder ejecutar las pruebas con ResembleJS. Las instrucciones de instalación las puede encontrar en https://www.npmjs.com/package/canvas
* **Ghost version 4.5**: [Ghost](https://ghost.org/docs/install/)
* **Ghost version 5.96** [Ghost](https://ghost.org/docs/install/)

#### Configuraciones previas
* Las instalaciones de Ghost 4.5 y 5.96 deben estar corriendo en puertos diferentes para que los escenarios de pruebas puedan ser ejecutados por medio de un script unico. La configuracion por defecto es Ghost 4.5 por el puerto 2368 y Ghost 4.96 por el puerto 2369.
* En la carpeta *'cypress-ghost-v4'* se encuentra el archivo **cypress.config.js** donde se debe configurar el puerto por el cual se esta ejecutando la version 4.5 de Ghost. Adicional se debe indicar las credenciales de acceso a la herramienta.
* En la carpeta *'cypress-ghost-v5'* se encuentra el archivo **cypress.config.js** donde se debe configurar el puerto por el cual se esta ejecutando la version 4.96 de Ghost. Adicional se debe indicar las credenciales de acceso a la herramienta.
* Desde la consola en la raiz del proyecto se debe ejecutar el comando `npm install` para que se instalen las dependecias necesarias.

#### Ejecución de las pruebas

Se debe ubicar desde la consola en la raiz del proyecto, desde alli se ejecuta el siguiente comando el cual se encarga de ejecutar los escenarios de las pruebas e2e en las dos versiones de Ghost y posteriormente realiza las pruebas de regresion visual de forma automatica. 

```
npm run test:cy:rsjs:all
```

#### Resultados de las pruebas
Al finalizar las ejecuciones de las pruebas e2e con cypress se deja un registro visual de cada uno de los pasos ejecutados en los escenarios, en los directorios 'screenshots' de cada carpeta.

Al finalizar la ejecución de pruebas de regresion visual se genera de forma automática un directorio llamado output_differences, el cual contiene las carpetas de las imagenes comparadas que se encontraron en las dos ejecuciones de E2E, también se encuentra un archivo HTML que muestra el reporte de los resultados de la prueba.

El informe de resultados en HTML contiene una tabla con el nombre del archivo comparado, la imagen de la ejecución en la versión Ghost 4.5, la imagen de la ejecución en la versión Ghost 5.96, la imagen que refleja las diferencias, el porcentaje de diferencia encontrado y el tiempo de ejecución.

#### Observaciones finales
Los pasos descritos anteriormente se basan en el sistema opertaivo **macOs**, si se ejecuta desde windows se deben realizar desde el Powershell.

## Pruebas E2E + Pruebas de regresión visual( Kraken + Pixelmatch ) 

Para ejecutar las 20 pruebas e2e sobre la version Ghost 5.96, las 5 pruebas e2e sobre las version Ghost 4.5 y las 5 pruebas de regresion visual con estas herramientas se deben seguir los pasos que se encuentran dentro del archivo **README-PXM.md** que se encuentra dentro de la carpeta `/pixelmatch`
