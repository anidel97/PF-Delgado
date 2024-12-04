/*Ciclo para carga de registros*/

const nombreContacto = prompt("Escribe tu nombre");
const apellidoContacto = prompt("Escribe tu apellido");
const servicioContacto = prompt("Escribe el servicio por el que quieras consultar");

let registro = 0;

for (registro = 0; registro <= 5; registro++) {
    const nombreContacto = prompt("Escribe tu nombre");
    const apellidoContacto = prompt("Escribe tu apellido");
    const servicioContacto = prompt("Escribe el servicio por el que quieras consultar");
    console.log ("Registro N° " + registro + " : " + nombreContacto + " " + apellidoContacto + " requiere servicio de " + servicioContacto.toUpperCase())
}
alert ("Nuevos registros pendientes: " + String (registro))