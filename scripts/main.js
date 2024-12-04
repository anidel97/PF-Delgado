/*Condicional en INDEX*/

console.log("Hola, bienvenido a AnDeStudio.");

alert ("Buscas transformar tus espacios? Dejanos tu nombre e email para acceder a nuestro newsletter con los mejores consejos y tips.");
const nombreUsuario = prompt ("Nombre");
const emailUsuario = prompt ("Email");
if ((nombreUsuario =="") && (emailUsuario == "")) {
    alert ("Estás seguro que no deseas suscribirte a nuestro newsletter?")
} else{
    alert ("Gracias por suscribirte a nuestro newsletter! Todos los meses vas a recibir consejos, inspiración y tips para potenciar y mejorar tus espacios!")
    console.log ("Bienvenido " + nombreUsuario + " a nuestro Newsletter!") 
}

