# Proyecto Filtro

Realizacion de pagina para registro de clientes en HTML, CSS y JS

# JavaScript

## Importación de Dependencias
- Se importa la función `postDatas` desde el archivo `API.js` ubicado en el directorio "../../API/".

## Clase `FormPage`
- Se define una clase llamada `FormPage` que extiende de `HTMLElement`.
- En el constructor de la clase:
  - Se llama al método `render()` para generar la estructura HTML del formulario.
  - Se inicializa el objeto `OpcionesElegidas` para almacenar las opciones seleccionadas por el usuario.
  - Se invocan métodos para gestionar la selección de opciones y el envío del formulario.
  
## Métodos
- `render()`: Genera la estructura HTML del formulario con varias secciones para seleccionar diferentes opciones.
- `obtenerOpcionCalidad()`: Gestiona la selección de opciones relacionadas con la calidad de la aplicación.
- `obtenerOpcionPlataforma()`: Gestiona la selección de opciones relacionadas con la plataforma de la aplicación.
- `obtenerOpcionInterfaz()`: Gestiona la selección de opciones relacionadas con el diseño de la interfaz de la aplicación.
- `obtenerOpcionMonetizacion()`: Gestiona la selección de opciones relacionadas con la monetización de la aplicación.
- `obtenerOpcionAutenticacion()`: Gestiona la selección de opciones relacionadas con la autenticación de la aplicación.
- `EnviarFormulario()`: Gestiona el envío del formulario, realiza una solicitud POST con las opciones seleccionadas y muestra un resumen en un modal.

## Event Listeners
- Se añaden event listeners a los elementos de opciones para cada sección del formulario.
- Se agrega un event listener al botón de enviar formulario para procesar el formulario.

Este README proporciona una descripción de alto nivel del script JavaScript y su funcionalidad en el contexto de la aplicación web. Se recomienda acompañar este archivo con información adicional sobre el proyecto y su implementación.

# Estilos

## Variables Globales

- `--background-color`: Define el color de fondo principal.
- `--color-secundario`: Define un color secundario para resaltar elementos.
- `--fondo-animacion`: Define el color de fondo para animaciones.

## Estilos Globales

- Se establecen reglas generales para todos los elementos, como eliminación de margen, relleno y uso de caja de borde.
- El color de fondo de todo el cuerpo (`body`) se establece usando la variable `--background-color`.
- Se define un estilo básico para enlaces (`a`), títulos (`h1`, `h2`), y párrafos (`p`).

## Estilos para Componentes y Funciones

- Se definen estilos para elementos con la clase `.secondary-color` para cambiar su color al definido por `--color-secundario`.
- Se establecen estilos para un contenedor de opciones (`contenedor-opciones`) y elementos de imagen para opciones (`imgs-opciones`).
- Se oculta el elemento `form-page`.

## Estilos para la Página Principal

- Se define un diseño flexible para el contenedor principal (`contenedor-main`) y sus elementos hijos (`elementos-main`).
- Se establece un contenedor de imagen (`contenedor-main_imagen`) con una imagen de fondo.
- Se definen estilos para botones (`btn-empezar`) y se agrega una animación al botón en el estado de desplazamiento (`:hover`).
- Se proporciona un estilo específico para dispositivos de pantalla pequeña utilizando media queries (`@media`).

## Estilos para Categorías de Opciones

- Se definen estilos para contenedores de opciones (`contenedor-opcion`) y se agregan transiciones y efectos de hover.
- Cada opción tiene una clase específica para su apariencia visual (`calidad-optima`, `aplicacion-android`, etc.).

## Estilos para Elementos Modales

- Se definen estilos para un modal (`modal-resumen`) con una estructura básica y sombras para efecto tridimensional.
- Se proporciona un estilo para el texto del modal (`txt-modal`).

## Imágenes

- Se hace referencia a imágenes en varios selectores para aplicarlas como fondo de elementos específicos.

Este README proporciona una descripción general del código CSS y sus funcionalidades. Se recomienda acompañar este archivo con una descripción detallada del proyecto y su contexto.
