// Capturamos la lista del html
let ls = document.getElementById("lista");
//inicializar la variable de iteración
let i = 0;
//Comenzamos el bucle, desde 0 hasta < length
while (i < ls.children.length) {
    //acceder al contenido del elemento children []
    let hijo = ls.children[i];
    //Añadirle un punto (concatenamos con +);
    hijo.innerHTML += ".";
    // Esto equivale a:     hijo.innerHTML = hijo.innerHTML + ".";
    i++; // Incrementamos la variable, importante recordarlo.
    //Finalizamos el bucle.
}

//El bucle "for" permite hacer acciones con, entre otras cosas, el i++ incluido.

for (let i = 0; i < ls.children.length; i++) {
    ls.children[i].innerHTML += ".";
}
//Esto, hace lo mismo que el while anterior.

//Ahora pintaremos de rojo la línea de "hola mundo".
let p = document.getElementById("parrafo");
p.style.color = "red";

//Utilizando un bucle como el de arriba.
for (let i = 0; i < ls.children.length; i++) {
    if (i == 2 || i == 1) {
        ls.children[1].style.color = "crimson";
    }
}
//Con un if dentro para pintar de rojo.
//pintamos los elementos "Segundo" y "Cuarto" de la lista.



// Creamos una lista de artistas musicales:
let artistas = ["Metálica",  "Slayer", "ACDC", "Sonata Artica", "OffSpring", "Gorilaz", "Fallout Boy"]

// Creamos un for que añada a una lista preparada un número de posición y al artista deseado.
// Esto se hará sobre una lista ya creada en el index, sobre su id.

//Puede que, mientras sea un ID, no sea necesario añadir la siguiente línea... Pero lo haremos por si acaso.
let tabla = document.getElementById("tabla");

for (let i = 0; i < artistas.length; i++) {

    //Con la siguiente línea, hacemos que se inserten correctamente los tr y td necesarios.
    //Además, con (i+1) hacemos que empiece a contar desde el 1 (no desde el 0 básico). Pero es una chapuza.
    /*
    let fila="<tr><td>"+(i+1)+"</td><td>"+artistas[i]+"</td></tr>";
    */
    //Así que haremos lo siguiente:

    //Creamos un tr.
    let fila = document.createElement("tr");
    //Creamos un td para la celda del número.
    let celda1 = document.createElement("td");
    //Creamos un td para la celda del artista.
    let celda2 = document.createElement("td");
    //rellenamos la celda del número con el indice es i+1 para que la gente vea la lista a partir del 1 no del 0.
    celda1.innerHTML = i+1;
    //Rellenamos la celda del artista con el artista que toca.
    celda2.innerHTML = artistas[i];
    //Añadimos a la fila la celda del número con appenchild.
    fila.appendChild(celda1);
    //Añadimos a la fila la celda del artista con appendChild.
    fila.appendChild(celda2);
    //añadiremso la fila a la tabla.
    tabla.appendChild(fila);
}