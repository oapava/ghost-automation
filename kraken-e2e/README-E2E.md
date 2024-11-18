# Kraken Testing Guide

Este documento describe los pasos necesarios para configurar y ejecutar las pruebas de Kraken en este proyecto.

---

## Requisitos previos

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

1. **Node.js**: Instala la versión 12-16 de Node.js desde [https://nodejs.org/](https://nodejs.org/).
2. **npm o Yarn**: Una herramienta para gestionar paquetes (npm viene con Node.js).
3. **Kraken**: Asegúrate de tener Kraken instalado en tu máquina. Si no está instalado, sigue las instrucciones de instalación más adelante.
4. **Ghost**: Asegurate de tener instalado y haber iniciado tu app de ghost que estara bajo pruebas si tienes dudas puedes revisar la siguiente documentacion: https://ghost.org/docs/install/local/
5. **Configurar Variables de Entorno**: Antes de ejecutar las pruebas, asegúrate de configurar correctamente las variables de entorno. Dado que se tienen dos proyectos de pruebas, es necesario editar el archivo `properties.json` de cada entorno. En este archivo, debes proporcionar la siguiente información:

    - **Usuario**: Corresponde al correo electrónico de un usuario administrador creado en tu instancia local de Ghost.
    - **Contraseña**: La contraseña asociada al usuario administrador.
    - **URL base**: La URL local donde está corriendo tu instancia de Ghost (Login).

   Estos valores deben coincidir con los credenciales y la configuración de tu entorno local de Ghost para garantizar que las pruebas se ejecuten correctamente.
---

## Instalación

1. **Clona el repositorio en tu máquina local**:
   Si utilizas SSH:
   ```bash
   git clone git@github.com:oapava/ghost-automation.git
   cd ghost-automation

Si utilizas HTTPS:

    git clone https://github.com/oapava/ghost-automation.git
    cd ghost-automation

Ingresa a la carpeta correspondiente a las pruebas que quieres ejecutar.

cd kraken-e2e

Verifica que Kraken esté instalado como dependencia: Puedes verificar si Kraken está instalado ejecutando el siguiente comando en la línea de comandos:

    kraken -v

Si no está instalado, puedes instalarlo con el siguiente comando en el directorio raíz del proyecto:

    npm install kraken-node --save-dev

O, si usas Yarn:

    yarn add kraken-node --dev


# Ejecución de Pruebas

Las pruebas de Kraken se encuentran en la carpeta: `kraken-e2e`. Para ejecutar las pruebas, sigue estos pasos:

## 1. Navega a la carpeta de pruebas

Dependiendo de la carpeta en la que desees ejecutar las pruebas, utiliza uno de los siguientes comandos:

### Para `kraken-e2e`:

    cd kraken-e2e

Una vez que estés en la carpeta de pruebas, ejecuta el siguiente comando:

    npx kraken-node run

Este comando iniciará la ejecución de las pruebas de Kraken en la carpeta seleccionada. Asegúrate de estar en la carpeta correcta antes de ejecutar este comando.

# Capturas de Pantalla

Durante cada ejecución de pruebas, se generará automáticamente un directorio llamado `reports` dentro de esta carpeta se alojara el reporte generado para la ejecucion asi como una carpeta screenshots en la cual se podran visualizar
las imagenes tomadas durante la ejecucion de las pruebas.

# Guía para Entender el Reporte y la Definición de Pruebas en Kraken

## 1. Entender el Reporte de Kraken

Cuando ejecutas pruebas con Kraken, se genera información útil en la consola y en los archivos del proyecto. Aquí tienes cómo interpretarla:

### a. **Consola**
- **Resultados por paso**: Cada acción realizada en la prueba se muestra con su estado (éxito o error).
- **Mensajes de error**: Si una prueba falla, la consola proporciona detalles, como el paso que falló y un mensaje descriptivo.
- **Duración**: Al final de la ejecución, se muestra cuánto tiempo tomó cada escenario.

### b. **Directorio `screenshots`**
- **Capturas por escenario**: Cada paso de la prueba genera una captura, organizada por versión de Ghost. Puedes usar estas imágenes para verificar visualmente los resultados.

---

## 2. Entender Dónde se Define la Prueba

Las pruebas en Kraken están escritas en archivos con extensión `.feature` y organizadas en carpetas dentro del proyecto.

### a. **Estructura de Archivos**
- **Carpeta `features`**: Contiene los archivos `.feature` donde se describen los escenarios de prueba usando Gherkin.
- **Carpeta `steps`**: Contiene los archivos `.js` con los pasos específicos para ejecutar las acciones definidas en los escenarios.
 

