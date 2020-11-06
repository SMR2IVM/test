let incógnita = "4"; //Este es el número que hay que adivinar
let respuesta; //Aquí guardaremos lo que introduzca el resultado

respuesta = prompt("¿Con que número junto al 6 hago la cara de tu retrato?")

if (respuesta == null) {
    alert("Fin del juego, le has dado a 'cancelar'");
}

else if (respuesta == incógnita) {
    alert("¡Correcto!");
}

else if (respuesta == "5" || respuesta == "3"){
    alert("Uy! Casi! Prueba otra vez, dale a F5")
}

else {
    alert("Eeeerror... Prueba otra vez, pulsa F5.");
}

/*Para evitar que del if, salte luego siempre al else, las opciones de fallo deberán ser también un "else" seguidos de "if" para su nueva opción. De este modo solo ejecutará el "else" solitario si no hay más opciones.*/