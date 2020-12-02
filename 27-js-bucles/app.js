/*let numero = 3;

while (numero >= 0) {
    alert (numero);   
    numero = numero - 1;
}
*/

//Las anteriores líneas comentadas, hacen lo mismo que la línea de for;

for (let index = 3; index >= 0; index--) {
    alert(index);
}

alert ("Fin de la cuenta atrás");

// Las siguentes líneas se usarán para mostrar en un alert cada uno de los nombres de la "lista de alumnos" por orden.

let alumnos = ["Banu", "Miguel", "Fernando", "Luis", "Ginel", "Steeven", "Segio", "Iván"]

for (let index = 0; index < alumnos.length; index++) {
    alert(alumnos[index])
}
// Index lleva la cuenta (Del 0 a "alumnos.lengt"). Y el alert reproduce al "alumno" de la posición "[index]".

for (let index = 0; index < alumnos.length; index++) {
    console.log(alumnos[index])
}

//La segunda operación es similar, pero reproduciendo el resultado en la consola (F12) en lugar de en alerts.
//Los reproducirá SOLO tras llegar a la línea, es decir, tras reproducir los alerts anteriores.