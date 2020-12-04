//Función para "ocultar el párafo", que se incrusta al botón:
    //let parrafo = document.getElementById("parrafo1");  permite:
        //Hacer que "parrafo" en este caso funcione para dicho ID de <p>.
    //parrafo.classList.add("oculto"); permite:
        //que el elemento "parrafo" modifique su clase "classList" añadiendo "add" la clase oculto ("oculto") que hemos creado previamente.

function ocultarParrafo(params) {
    let parrafo = document.getElementById("parrafo1");
    parrafo.classList.add("oculto");
}

//Función para "mostrar el parrafo", que se incrusta al botón:
    //Diferencia:en lugar de "añadir" elimina/quit/REMUEVE la clase "oculto" con ".remove"
function mostrarParrafo(params) {
    let parrafo = document.getElementById("parrafo1");
    parrafo.classList.remove("oculto");
}

//Si en lugar de definir la función en el interior de function (let parrafo =...etc)
//La añadimos al principio del todo, en caso de repetir esa función en varios sitios, no hará falta repetir la línea.

//Para cambiar el color con alta prioridad usaríamos:

/* 
parrafo.style.color="green";
*/