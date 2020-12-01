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