/*
let v1 = "hola";
let vNumero = 3;
let vBoolean = true;

alert("Vas a acceder a la página");

retornoConfirm = confirm("¿Deseas acceder a esta página?")
if (retornoConfirm == true) {
    alert("Bienvenido");
}
else {
    alert("Entonces cierra esta pestaña.");
}
*/
let colorSolucion = prompt("Define que color quieres que adivine");

alert("Estoy pensando en un color...");

let respuesta = prompt("¿Que color estoy pensando? Tienes 2 intentos.");

if (respuesta == colorSolucion) {
    alert("¡Correcto!")
}
else {
    respuesta = prompt("¡Nop! Te queda un intento.")

    if (respuesta == colorSolucion) {
        alert("¡Correcto!")
    }
    else {
        alert("¡Nop! Te has quedado sin intentos, haz F5 y vuelve a intentarlo.")
    }
}