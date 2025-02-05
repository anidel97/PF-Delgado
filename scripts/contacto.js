const registrosMapeado = [];

const crearContacto = (nombre, apellido, direccion = "", email = "", serviciosAConsultar = "", cantidadDeAmbientes = "", contanosTuProyecto = "", honorarios = "", presupuestoProyecto = "") => {

    if ((nombre === "") || (apellido === "") || (email === "") || (serviciosAConsultar === "") || (!contanosTuProyecto)) {
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
    registrosMapeado.unshift(unRegistro);
    return true
}

const formularioContacto = document.getElementById("formulario-contacto");
const spinner = document.getElementById("spinner"); 

formularioContacto.addEventListener("submit", (evento) => {
    evento.preventDefault();
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
    setTimeout(() => {
        spinner.classList.add("visually-hidden");
    }, 3300)
    if (crearContacto(nombre, apellido, direccion, email, serviciosAConsultar, cantidadDeAmbientes, contanosTuProyecto, honorarios, presupuestoProyecto)) {
        localStorage.setItem("registrosRecibidos", JSON.stringify(registrosMapeado))
        const restoreData = JSON.parse(localStorage.getItem("registrosRecibidos"))
    } else {

    }
    formularioContacto.reset()
})

document.addEventListener("DOMContentLoaded", () => {
    recuperarDatos()
        .then((misRegistros) => {
            misRegistros.forEach(element => {
                registrosMapeado.unshift(element);
            });
        });
})

