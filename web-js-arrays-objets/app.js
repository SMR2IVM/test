/*Los arrys permiten crear una lista con, en este caso:
En la primera posición el nombre
En la segunda el apellido
En la tercera la edad.
*/
let alumnoArray = ["Pepito", "Perez", 54];
/*En la consola el nombre*/
console.log(alumnoArray[0]);

/*En la consola de error poner el apellido*/
console.error(alumnoArray[1]);

/*En un alert, poneis la edad*/
alert(alumnoArray[2]);


//Los objetos suelen escribirse por filas (Aunque puede hacerse de seguido).
//El último objeto NO LLEVA COMA al final, o da error.
let alumnoObjeto = {
    "nombre": "Pepito",
    "apellido": "Perez",
    "edad": 54
};

/*En la consola el nombre*/
console.log(alumnoObjeto.nombre);

/*En la consola de error poner el apellido*/
console.error(alumnoObjeto.apellido);

/*En un alert, poneis la edad*/
alert(alumnoObjeto.edad);

// Al ocurrir todo en la consola debemos F12 en el explorador.
//En los array, al ser informática, la lista empieza por 0 no por 1 -> 0 1 2 3 4...