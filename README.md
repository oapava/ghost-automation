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

## Pruebas E2E Cypress
Para ejecutar las 120 escenarios de pruebas e2e sobre la version Ghost 5.96 se deben seguir los siguientes pasos:

#### Requisitos previos
Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

* **npm o yarn**: Una herramienta para gestionar paquetes (npm viene con Node.js).
* **Cypress**: Herramienta usada para pruebas e2e. Si no lo tienes instalado puedes hacerlo mediante consola ejecutando el comando `npm install -g cypress`
* **Faker** : Herramienta para generar datos aleatorios, si no lo tienes instalado puedes usar el comando `npm install @faker-js/faker`
* **Ghost version 5.96** [Ghost](https://ghost.org/docs/install/)

#### Configuraciones previas
* La instalacion de Ghost 5.96 debe estar corriendo por el puerto 2369, si estas usando otro puerto en especifico desbe ajustar la configuracion en el archvio **cypress.config.js**. En este mismo archivo debes incluir las credenciales de acceso a tu version de Ghost. Es recomendable ejecutar las pruebas en una instancia limpia de Ghost.

* Desde la consola en la raiz del proyecto se debe ejecutar el comando `npm install` para que se instalen las dependecias necesarias.

#### Ejecución de las pruebas

Desde una terminal ubíquese en el directorio **cypress-e2e**, donde tiene el archivo **cypress.config.js** y el directorio **cypress**. Una vez alli ejecute el siguiente comando.

```
cypress run --headless
```

#### Resultados de las pruebas
Al finalizar las ejecuciones de las pruebas e2e con cypress la consola mostrara un resumen de todas las pruebas ejecutadas y detallara si alguna de ellas genero fallo o error.


#### Observaciones finales
Los pasos descritos anteriormente se basan en el sistema opertaivo **macOs**, si se ejecuta desde windows se deben realizar desde el Powershell.