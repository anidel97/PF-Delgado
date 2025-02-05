const registrosRecuperados = JSON.parse(localStorage.getItem("registrosRecibidos"));

const recuperarInfoStorage = () => {
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
const registrosContainer = document.getElementById("registros-container");
const renderRegistros = () => {
    registrosContainer;
    registrosContainer.innerHTML = '';
    recuperarInfoStorage()
        .then((misRegistros) => {
            misRegistros.forEach(registro => {
                const divRegistro = document.createElement("div");
                divRegistro.classList.add("registro-item");
                divRegistro.innerHTML = `
                <h2><strong>Nombre:</strong> ${registro.nombre} ${registro.apellido}</h2>
                <p><strong>Email:</strong> ${registro.email}</p>
                <p><strong>Servicios a consultar:</strong> <strong> ${registro.serviciosAConsultar}</strong></p>
                <p><strong>Cantidad de ambientes:</strong> ${registro.cantidadDeAmbientes}</p>
                <p><strong>Comentario:</strong> ${registro.contanosTuProyecto}</p>
                <p><strong>Honorarios:</strong> ${registro.honorarios}</p>
                <p><strong>Presupuesto:</strong> ${registro.presupuestoProyecto}</p>
                <a href="http://hotmail.com/" target="_blank">Responder</a>
            `;
                registrosContainer.appendChild(divRegistro);
            });
        })
        .catch((_error) => {
            registrosContainer.innerHTML = "<p>No hay registros disponibles.</p>";
        })
};

const clickArquitectura = document.getElementById("filtro-arquitectura");
clickArquitectura.addEventListener("click", (evento) => {
    evento.preventDefault();
    recuperarInfoStorage()
        .then((filtro) => {
            const filteredResults = registrosRecuperados.filter((unfiltro) => {
                return unfiltro.serviciosAConsultar.includes('Arquitectura');
            });
            registrosContainer.innerHTML = '';
            filteredResults.forEach(registro => {
                const divRegistro = document.createElement('div');
                divRegistro.classList.add('registro-item');
                divRegistro.innerHTML = `
                    <h2><strong>Nombre:</strong> ${registro.nombre} ${registro.apellido}</h2>
                    <p><strong>Servicio:</strong> <strong>${registro.serviciosAConsultar}</strong></p>
                    <p><strong>Cantidad de ambientes:</strong> ${registro.cantidadDeAmbientes}</p>
                    <p><strong>Comentario:</strong> ${registro.contanosTuProyecto}</p>
                    <p><strong>Honorarios:</strong> ${registro.honorarios}</p>
                    <p><strong>Presupuesto:</strong> ${registro.presupuestoProyecto}</p>
                    <a href="http://hotmail.com/" target="_blank">Responder</a>
                `;
                registrosContainer.appendChild(divRegistro);
            });
        })
        .catch((error) => {
            registrosContainer.innerHTML = "<p>No hay registros disponibles.</p>";
        });
});

const clickInteriorismo = document.getElementById("filtro-interiorismo");
clickInteriorismo.addEventListener("click", (evento) => {
    evento.preventDefault();
    recuperarInfoStorage()
        .then((filtro) => {
            const filteredResults = registrosRecuperados.filter((unfiltro) => {
                return unfiltro.serviciosAConsultar.includes('Interiorismo');
            });
            registrosContainer.innerHTML = '';
            filteredResults.forEach(registro => {
                const divRegistro = document.createElement('div');
                divRegistro.classList.add('registro-item');
                divRegistro.innerHTML = `
                    <h2><strong>Nombre:</strong> ${registro.nombre} ${registro.apellido}</h2>
                    <p><strong>Servicio:</strong> <strong>${registro.serviciosAConsultar}</strong></p>
                    <p><strong>Cantidad de ambientes:</strong> ${registro.cantidadDeAmbientes}</p>
                    <p><strong>Comentario:</strong> ${registro.contanosTuProyecto}</p>
                    <p><strong>Honorarios:</strong> ${registro.honorarios}</p>
                    <p><strong>Presupuesto:</strong> ${registro.presupuestoProyecto}</p>
                    <a href="http://hotmail.com/" target="_blank">Responder</a>
                `;
                registrosContainer.appendChild(divRegistro);
            });
        })
        .catch((error) => {
            registrosContainer.innerHTML = "<p>No hay registros disponibles.</p>";
        });
});

const clickAsesoramiento = document.getElementById("filtro-asesoramiento");
clickAsesoramiento.addEventListener("click", (evento) => {
    evento.preventDefault();
    recuperarInfoStorage()
        .then((filtro) => {
            const filteredResults = registrosRecuperados.filter((unfiltro) => {
                return unfiltro.serviciosAConsultar.includes('Asesoramiento');
            });
            registrosContainer.innerHTML = '';
            filteredResults.forEach(registro => {
                const divRegistro = document.createElement('div');
                divRegistro.classList.add('registro-item');
                divRegistro.innerHTML = `
                    <h2><strong>Nombre:</strong> ${registro.nombre} ${registro.apellido}</h2>
                    <p><strong>Servicio:</strong> <strong>${registro.serviciosAConsultar}</strong></p>
                    <p><strong>Cantidad de ambientes:</strong> ${registro.cantidadDeAmbientes}</p>
                    <p><strong>Comentario:</strong> ${registro.contanosTuProyecto}</p>
                    <p><strong>Honorarios:</strong> ${registro.honorarios}</p>
                    <p><strong>Presupuesto:</strong> ${registro.presupuestoProyecto}</p>
                    <a href="http://hotmail.com/" target="_blank">Responder</a>
                `;
                registrosContainer.appendChild(divRegistro);
            });
        })
        .catch((error) => {
            registrosContainer.innerHTML = "<p>No hay registros disponibles.</p>";
        });
});

const clickTodos = document.getElementById("filtro-todos");
clickTodos.addEventListener("click", (evento) => {
    evento.preventDefault();
    recuperarInfoStorage()
        .then((registrosRecuperados) => {
            registrosContainer.innerHTML = '';
            registrosRecuperados.forEach(registro => {
                const divRegistro = document.createElement('div');
                divRegistro.classList.add('registro-item');
                divRegistro.innerHTML = `
                    <h2><strong>Nombre:</strong> ${registro.nombre} ${registro.apellido}</h2>
                    <p><strong>Servicio:</strong> <strong>${registro.serviciosAConsultar}</strong></p>
                    <p><strong>Cantidad de ambientes:</strong> ${registro.cantidadDeAmbientes}</p>
                    <p><strong>Comentario:</strong> ${registro.contanosTuProyecto}</p>
                    <p><strong>Honorarios:</strong> ${registro.honorarios}</p>
                    <p><strong>Presupuesto:</strong> ${registro.presupuestoProyecto}</p>
                    <a href="http://hotmail.com/" target="_blank">Responder</a>
                `;
                registrosContainer.appendChild(divRegistro);
            });
        })
        .catch((error) => {
            registrosContainer.innerHTML = "<p>No hay registros disponibles.</p>";
        });
});

document.addEventListener("DOMContentLoaded", () => renderRegistros());
