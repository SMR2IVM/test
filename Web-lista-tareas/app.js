function anyadirTarea() {
    //tomo el valor del input
    let eTarea = document.getElementById("idTarea");
    // compruebo si tiene algo de texto
    if (eTarea.value != "") {
        //si tiene texto, añado la tarea en la lista
        anyadirElemento(eTarea.value);
        //despues de añadir borro el elento input
        eTarea.value = "";
    }
    //si no tiene texto, no hago nada
}
//funcion añadir elemento a la lista. 
//cogera un parámetro y lo añadirá a la lista listaTareas
function anyadirElemento(textoTarea) {
    //cojo el elemento de la lista
    let listaTareas = document.getElementById("listaTareas");
    //le añado un elemento de lista con el texto
    // del parámetro textoTarea

    //Creamos un elemento <li>
    liTarea = document.createElement("li");

    //Relleno el elemento
    liTarea.innerHTML = textoTarea;

    //Añado el elemtento a la lista de tareas
    listaTareas.appendChild(liTarea);


    //Esto es equivalente
    //listaTareas.innerHTML = listaTareas.innerHTML + "<li>" + textoTarea + "</li>";
}

function borrarTarea() {
    //usar prompt para pedir al usuario un número de tarea.
    let numTarea = prompt("Escribe el número de latarea que quieres borrar");

    //capturo la lista de tareas.
    let lTareas = document.getElementById("listaTareas");
    //comprobar que el número de tarea es válido.
    if (numTarea > 0 && numTarea <= lTareas.children.length) {

        //borrar de la lista de tareas el elemento n-1; donde n es el valor pasado por el usuario.
        numTarea = numTarea - 1; //También podría ser "numtarea--" o "numtarea -= numtarea"

        //Capturo el elemento que quiero borrar.
        let eTareaBorrar = lTareas.children[numTarea];
        //borro ese elemento de la lista.
        lTareas.removeChild(eTareaBorrar);
    } else {
        alert("Número no válido.");
    }
}