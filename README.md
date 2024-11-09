# Participantes en la integración
- Omar Pava | o.pava@uniandes.edu.co
- Harold Virguez | h.virgueze@uniandes.edu.co
- Pablo Rivera | p.riverah@uniandes.edu.co
- Edwin Cruz | e.cruzs@uniandes.edu.co

# Instrucciones generales de instalación:

## Cypres:

Para poder ejecutar esta automatización realizada con la herramienta Cypress es necesario tener en el sistema:
 - Node >= 16
 - Cypress

Una vez se cuente con las herramientas instaladas se debe iniciar Cypress e importar el proyecto de la carpeta cypress-e2e de este repositorio. 
Si se importa de forma correcta, debería aparecer para ejecución el archivo ghost_e2e_test.cy.js en la interfaz gráfica de Cypress. Este archivo se aloja en el directorio `cypress-e2e/cypress/e2e`

Al hacer click en el nombre de el archivo anteriormente mencionado se ejecutarán las pruebas realizadas.

## Kraken:

Para poder ejecutar esta automatización realizada con la herramienta Kraken es necesario tener en el sistema:
- SDK de Android (ADB y AAPT configurados)
- Apio
- NodeJS (versión >= 12)
- Java


Para la ejecución de esta automatización se deben seguir los siguientes pasos:
1. Ubiquese en el directorio kraken-2e2 desde una terminal de comandos
2. Instale las dependencias con el comando `npm install` 
3. Valide que la instalación y las dependencias de Kraken se encuentran bien instaladas con el comando `kraken-node doctor`. Si no se realizaran pruebas de mobile solo serán necesarias  DK de Android (ADB y AAPT), Appium
4. Una vez valide que esto está correcto, ejecute las pruebas de Kraken por medio del comando `npx kraken-node run`. Este comando abrirá una nueva ventana de navegación y ejecutará las pruebas especificadas en el archivo ghost.feature, este archivo está alojado en el directorio `features/` el cual se complementa por mediod e unos steps que se alojan en el archivo step.js, este archivo se encuentra en `features/web/step_definitions/step.js`. 

### Configuración de datos de login:
Para configurar los datos de usuario se utiliza el archivo properties.json alojado en `kraken-e2e/properties.json` este archivo cuenta con dos variables de entorno `USERNAME` que hace referencia al usaurio para ingresar a Ghost y `PASSWORD` para poder completar el inicio de sesión.