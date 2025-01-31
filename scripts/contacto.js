/*Ciclo para carga de registros

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
alert ("Nuevos registros pendientes: " + String (registro))*/



//!2° PRENTREGA 23/12/2024

const unServicio = ["Arquitectura", "Interiorismo", "Asesoramiento a distancia", "Proyecto integral"];
const unAmbiente = ["1 ambiente", "2 ambientes o más", "proyecto completo"];
const unPrecio = ["usd 500", "usd 1000", "usd 2000", "+ usd 2500"];

class RegistroContacto {
    nombre = "";
    apellido = "";
    direccion = "";
    email = "";
    serviciosAConsultar = "";
    cantidadDeAmbientes = "";
    contanosTuProyecto = "";
    honorarios = "";
    presupuestoProyecto = "";
    /*fechaDeInscripcion= new Date ();*/

    constructor(nombre, apellido, direccion, email, serviciosAConsultar = "", cantidadDeAmbientes = "", contanosTuProyecto, honorarios = "", presupuestoProyecto, fechaDeInscripcion = new Date()) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.email = email.toLowerCase();
        this.serviciosAConsultar = serviciosAConsultar;
        this.cantidadDeAmbientes = cantidadDeAmbientes;
        this.contanosTuProyecto = contanosTuProyecto;
        this.honorarios = honorarios;
        this.presupuestoProyecto = presupuestoProyecto;
        /*this.fechaDeInscripcion = fechaDeInscripcion;*/
    }

    toString() {
        return this.fechaDeInscripcion + " - " + this.apellido + " " + this.nombre + " está interesado en servicio de " + this.serviciosAConsultar.join(", ");
    }

    addItem(unServicio) {
        this.serviciosAConsultar.push(unServicio)
    }
    addItem2(nuevoHonorario) {
        this.honorarios.push(nuevoHonorario)
    }
}

const registrosMapeado = registros.map((unRegistro) => {
    return new RegistroContacto(unRegistro.nombre, unRegistro.apellido, unRegistro.direccion, unRegistro.email, unRegistro.serviciosAConsultar, unRegistro.cantidadDeAmbientes, unRegistro.contanosTuProyecto, unRegistro.honorarios, unRegistro.presupuestoProyecto, unRegistro)
});

/*para que aparezca el array vacío (y funcione el find), con los valores que le de el usuario usar:*/
//const registrosMapeado = []

/*sitio cargado completamente
document.addEventListener ("DOMContentLoaded", ()=>{
    Swal.fire({
        title: 'Genial',
        text: 'Ya podes trabajar con el sitio',
        icon: 'success',
        confirmButtonText: 'Cool'
    })
})*/

const crearContacto = (nombre, apellido, direccion = "", email = "", serviciosAConsultar = "", cantidadDeAmbientes = "", contanosTuProyecto = "", honorarios = "", presupuestoProyecto = "", fechaDeInscripcion = new Date()) => {
    //Chequear que los datos obligatorios estén cargados

    if ((nombre === "") || (apellido === "") || (email === "") || (serviciosAConsultar.trim === "") || (!contanosTuProyecto)) {
        /*alert("Por favor completa los datos solicitados");*/
        setTimeout(() => {
            Swal.fire({
                title: 'Ups!',
                text: 'Por favor completa los datos obligatorios',
                icon: 'error',
                confirmButtonText: 'De acuerdo',
                buttonsStyling: 'false',
            });
        }, 3500)
        return false 

    }
    else {
        /*alert("Tus datos han sido cargados con exitos. Nos pondremos en contacto contigo a la brevedad")*/
        setTimeout(() => {
            Toastify({
                text: "Tus datos han sido cargados con exito! Nos pondremos en contacto contigo a la brevedad",
                duration: 5000,
                close: true,
                gravity: "bottom",
                className: "info",
                style: {
                    background: "linear-gradient(to right,rgb(101, 109, 74),rgb(237, 224, 212))",
                }
            }).showToast();
        }, 3500)
    };
    const unRegistro = new RegistroContacto(nombre.trim(), apellido.trim(), direccion.trim(), email.trim().toLowerCase(), serviciosAConsultar.trim(), cantidadDeAmbientes.trim(), contanosTuProyecto.trim(), honorarios.trim(), presupuestoProyecto.trim());
    console.log(unRegistro);
    registrosMapeado.push(unRegistro);
    console.log(registrosMapeado)
    return true 

    /* el find se puede declarar adentro de la funcion o fuera como lo dejé
    console.log (registrosMapeado.find((unServicio) => { unServicio.serviciosAConsultar == "arquitectura"}))*/
}


//devolver datos de formulario
const formularioContacto = document.getElementById("formulario-contacto");
const spinner = document.getElementById("spinner"); /*esto lo agregue con chat gpt*/

formularioContacto.addEventListener("submit", (evento) => {
    evento.preventDefault();
    // Mostrar el spinner
    spinner.classList.remove("visually-hidden");

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const direccion = document.getElementById("adress").value;
    const email = document.getElementById("mail").value;
    const serviciosAConsultar = document.getElementById("servicio-a-consultar").values;
    const cantidadDeAmbientes = document.querySelectorAll('div input[type="checkbox"]').value;
    const contanosTuProyecto = document.getElementById("comentario-proyecto").value;
    const honorarios = document.getElementById("honorario").value;
    const presupuestoProyecto = document.getElementById("comentario-presupuesto").value;

    // Ocultar el spinner después de la validación
    setTimeout(() =>{
        spinner.classList.add("visually-hidden");
    }, 3300)

    if (crearContacto(nombre, apellido, direccion, email, serviciosAConsultar, cantidadDeAmbientes, contanosTuProyecto, honorarios, presupuestoProyecto)) {
        localStorage.setItem("registrosRecibidos", JSON.stringify(registrosMapeado))
        const restoreData = JSON.parse(localStorage.getItem("registrosRecibidos"))
        console.log("recuperamos info, ", restoreData)
    } else {

    }
    
    formularioContacto.reset()
})
console.log("Registros pendientes de revisión: ", registrosMapeado)






//Búsqueda y filtrado de información
const busquedaServicios = registros.find((unRegistro) => { return unRegistro.serviciosAConsultar == "Interiorismo" });
console.log("Requiere servicios de interiorismo: ", busquedaServicios)

const filtradoHonorarios = registros.filter((unRegistro) => { return unRegistro.honorarios == "usd 2000" });
console.log("Tope de honorarios usd 2000: ", filtradoHonorarios)

console.log(registrosMapeado);
