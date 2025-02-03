const recuperarDatos = () => {
    return new Promise((resolve, reject) => {
        fetch('/mocks/registrosContacto.json')
            .then((res) => res.json())
            .catch((error) => {
                reject("--> error leyendo archivo local");
            })
            .then((data) => {
                resolve(mapObjectToRegistroContacto(data));
            })
    })
}

const mapObjectToRegistroContacto = (data = []) => {
    return data.map((unRegistro) => {
        return new RegistroContacto(unRegistro.nombre, unRegistro.apellido, unRegistro.direccion, unRegistro.email, unRegistro.serviciosAConsultar, unRegistro.cantidadDeAmbientes, unRegistro.contanosTuProyecto, unRegistro.honorarios, unRegistro.presupuestoProyecto, unRegistro)
    });
}
