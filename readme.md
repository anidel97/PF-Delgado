# ProyectoFinal+Delgado

## AnDeStudio

AnDeStudio es una aplicación web diseñada para mostrar y gestionar proyectos de diseño arquitectónico e interiorismo. El sitio web permite a los usuarios enviar los detalles que desean en sus proyectos, los cuales se almacenan y se muestran de manera dinámica en la pantalla del administrador para luego ser respondidos. La aplicación incluye funcionalidades para filtrar y mostrar los registros de proyectos según criterios específicos.

- Características
    - Página de inicio: Introducción a AnDeStudio con enlaces de navegación a otras secciones (index.html).
    - Formulario de contacto: Permite a los usuarios enviar los detalles de su proyecto ("contacto.html").
    - Registros de proyectos: Muestra los registros de proyectos enviados con opciones para filtrar por tipo de servicio.

- Estructura de Archivos
    - index.html: La página de inicio del sitio web.
    pages/contacto.html: La página del formulario de contacto donde los usuarios pueden enviar los detalles de su proyecto.
    - scripts/contacto.js: Archivo JavaScript que maneja el formulario de la página "contacto.html". Es donde se cargan, validan y envian (o no) los registros de los usuarios al administrador. Asegura que los campos requeridos estén completos, proporciona comentarios al usuario con mensajes de error o éxito y crea y almacena un nuevo registro de contacto en un array.
    - scripts/contactoController.js: Archivo JavaScript administrador. Maneja la recuperación, filtrado y visualización de los registros de proyectos; no es visible para los usuarios, solo para el administrador del sitio.
    - scripts/recuperarInfo.js: Archivo JavaScript donde se encuentran variables globales para recuperar los datos. Estas funciones (que incluyen desde promesa y fetch hasta mapeado) se utilizan para recuperar los registros  (provenientes de API local "mocks/registrosContacto.json" y registros que carguen los usuarios), con el fin de procesarlos y mostrarlos de forma adecuada.
    - classes/registroContacto.js: Archivo que contiene la clase constructora de los registros.
    - css/estilos.css: Estilos CSS personalizados para el sitio web.

### Archivo contactoController.js
Como dije anteriormente, el archivo contactoController.js es responsable de gestionar los registros de proyectos en el administrador. Incluye las siguientes funcionalidades clave.
- Funciones:
    - recuperarInfoStorage: Recupera los registros desde el localStorage u obtiene nuevos registros si no se encuentran.
    - renderRegistros: Renderiza los registros de proyectos para que se visualicen en la página web.
    - Eventos
        - Botones de filtro: Permiten filtrar los registros según el tipo de servicio seleccionado por el usuario ("Arquitectura", "Interiorismo", "Asesoramiento").
        - Botón de restablecer filtros: Restablece los filtros y muestra todos los registros de proyectos ("Todos").
        - DOMContentLoaded: Asegura que los registros se muestren cuando la página esté completamente cargada.

### Simulación
La simulación comienza con la carga de datos en el formulario de la página "Contacto" (contacto.html). Una vez cargados y habiendo hecho click en el botón "submit", los datos son validados: si los datos, al menos los obligatorios (*), fueron completados correctamente se guardarán en el localStorage y al usuario le aparecerá un "Toastify" confirmándole su recepción. Caso contrario, aparecerá un "SweetAlert" pidiendo que se completen los datos obligatorios.
Estos datos son recuperados y renderizados en la página del administrador (contactController.html). Allí la persona a cargo podrá filtrar los registros en función del servicio solicitado por el usuario o, por el contrario, ver el total de los mismos.

