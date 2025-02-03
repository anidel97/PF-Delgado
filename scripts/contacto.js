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



const registrosMapeado = [];

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
    const unRegistro = new RegistroContacto(nombre.trim(), apellido.trim(), direccion.trim(), email.trim().toLowerCase(), serviciosAConsultar.trim(), cantidadDeAmbientes, contanosTuProyecto.trim(), honorarios.trim(), presupuestoProyecto.trim());
    console.log(unRegistro);
    registrosMapeado.unshift(unRegistro); //antes estaba un .push
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
    const serviciosAConsultar = document.getElementById("servicio-a-consultar").value;
    const cantidadDeAmbientes = document.getElementById("cantidad-de-ambientes").value;
    const contanosTuProyecto = document.getElementById("comentario-proyecto").value;
    const honorarios = document.getElementById("honorario").value;
    const presupuestoProyecto = document.getElementById("comentario-presupuesto").value;

    // Ocultar el spinner después de la validación
    setTimeout(() => {
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

//chequear lo el checkbox
const checkboxes = document.querySelectorAll('div input[type="checkbox"]');
let cantidadDeAmbientes = 1; // Contador de los ambientes seleccionados
let ambientesSeleccionados = ["1 ambiente", "2 ambientes", "proyecto completo"];

/*checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Si el checkbox está marcado, lo agregamos al contador y a la lista
        if (checkbox.checked) {
            cantidadDeAmbientes++;
            ambientesSeleccionados.push(checkbox.value);
            
        }
        
    });
    console.log('Cantidad de ambientes seleccionados:', cantidadDeAmbientes);
    console.log('Ambientes seleccionados:', ambientesSeleccionados);
});*/

/*checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        actualizarSeleccion();
    });
});

// Función para actualizar los valores seleccionados
function actualizarSeleccion() {
    // Reseteamos las variables
    cantidadDeAmbientes = 1;
    ambientesSeleccionados = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            cantidadDeAmbientes++;
            ambientesSeleccionados.push(checkbox.value);
        }
    });

    console.log('Cantidad de ambientes seleccionados:', cantidadDeAmbientes);
    console.log('Ambientes seleccionados:', ambientesSeleccionados);
}*/




document.addEventListener("DOMContentLoaded", () => {
    recuperarDatos()
        .then((misRegistros) => {
            misRegistros.forEach(element => {
                registrosMapeado.unshift(element);//antes habia un push
            });
        });
})
console.log("registros:", registrosMapeado);
