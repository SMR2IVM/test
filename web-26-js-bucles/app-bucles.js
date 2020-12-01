//Para ver esto expuesto, cambiamos el nombre del js de app-bucles a  app.js y el de app.js a app-bucles2.

//Aprendamos a hacer bucles.

let i = 0;
let conjunto = [10, 23, "Juan", false];

//con i < conjunto.length hacemos que:
//mientras i sea menor que el "largo" del conjunto (4 en este caso) mostrará las opciones marcadas.

while (i < conjunto.length) {
    alert("La posición " + i + " es " + conjunto[i]);
    i = i + 1;
}

//Con lo hecho arriba, el alert se repetirá 3 veces, al ser primero i = 1, luego 2 luego 3...
//Cuando llegue a 4 mostrará lo siguiente:

alert("Hemos acabado");

//Si no hubieramos añadido el i = i + 1; sería un bucle infinito.

let numeros = [3, 4, 5, 6, 3, 5, 75, 7, 6];
i = 0;
//Para "resetear" la i.

while (i < numeros.length) {
    numeros[i] = numeros[i] + 1;
    alert(i + " Es = a " + numeros[i]++);
    i++; // i++ es esquivalente a i=i+1;
}