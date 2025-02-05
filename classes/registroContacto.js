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

    constructor(nombre, apellido, direccion, email, serviciosAConsultar = "", cantidadDeAmbientes = "", contanosTuProyecto, honorarios = "", presupuestoProyecto) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.email = email.toLowerCase();
        this.serviciosAConsultar = serviciosAConsultar;
        this.cantidadDeAmbientes = cantidadDeAmbientes;
        this.contanosTuProyecto = contanosTuProyecto;
        this.honorarios = honorarios;
        this.presupuestoProyecto = presupuestoProyecto;
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