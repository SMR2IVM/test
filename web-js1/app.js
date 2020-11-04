//document.write modifica la página web

/*
document.write("<h1>Hola mundo</h1>") 
*/

/*
alert("Mira el h1")

let elemento = document.getElementById("encabezado")
elemento.innerHTML="Hola clase";
*/

let resultado;

resultado = confirm("¿Quieres que te sallude?");

if (resultado == true) {
    alert("Hola");
}

if (resultado == false) {
    alert("Los modales hacen al hombre...");
}