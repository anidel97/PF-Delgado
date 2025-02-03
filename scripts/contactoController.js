const recuperarInfoStorage = () => {
    const registrosRecuperados = JSON.parse(localStorage.getItem("registrosRecibidos"));
    return new Promise((resolve, reject) => {
        if (registrosRecuperados && Array.isArray(registrosRecuperados)) {
            resolve(mapObjectToRegistroContacto(registrosRecuperados));
        } else {
            recuperarDatos()
                .then((misRegistros) => {
                    resolve(misRegistros);
                })
                .catch((_error) => {
                    reject("No hay registros nuevos");
                })
        }
    })
}

// Esta función renderiza los registros en la UI
const renderRegistros = () => {
    const registrosContainer = document.getElementById("registros-container");
    registrosContainer.innerHTML = '';
    // Recuperar los registros del localStorage

    recuperarInfoStorage()
        .then((misRegistros) => {
            misRegistros.forEach(registro => {
                // Crear un contenedor para cada registro
                //en else recuperar la info del fetch
                const divRegistro = document.createElement("div");
                divRegistro.classList.add("registro-item");
                // Agregar los detalles del registro al contenedor
                divRegistro.innerHTML = `
                <h2><strong>Nombre:</strong> ${registro.nombre} ${registro.apellido}</h2>
                <p><strong>Email:</strong> ${registro.email}</p>
                <p><strong>Servicios a consultar:</strong> <strong>${registro.serviciosAConsultar}</strong></p>
                <p><strong>Cantidad de ambientes:</strong> ${registro.cantidadDeAmbientes}</p>
                <p><strong>Comentario:</strong> ${registro.contanosTuProyecto}</p>
                <p><strong>Honorarios:</strong> ${registro.honorarios}</p>
                <p><strong>Presupuesto:</strong> ${registro.presupuestoProyecto}</p>
                <a href="http://hotmail.com/" target="_blank">Responder</a>
            `;
                // Añadir el contenedor del registro al contenedor principal
                registrosContainer.appendChild(divRegistro);
            });
        })
        .catch((_error) => {
            registrosContainer.innerHTML = "<p>No hay registros disponibles.</p>";
        })
};


//esto es lo que no anda con el filtrado


const clickArquitectura = document.getElementById("filtro-arquitectura");
clickArquitectura.addEventListener ("click", (evento)=>{
    evento.preventDefault();
    recuperarInfoStorage()
    .then ((filtro) =>{
        return registrosRecuperados.filter ((unfiltro)=> {unfiltro.serviciosAConsultar.includes('Arquitectura')});
        renderRegistros ();
    });
    
});
console.log(clickArquitectura);
//lo de arriba es lo que no anda con el filtrado


// Llamar a esta función cuando la página haya cargado o cuando se desee actualizar los registros.
document.addEventListener("DOMContentLoaded", () => renderRegistros());
