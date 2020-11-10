let color = prompt("¿Que color quieres para el párrafo? ¿Rojo o verde?");
let color = color.toLowerCase();
let elementoParrafo = document.getElementById("parrafo");
console.log(elementoParrafo);
elementoParrafo.innerHTML="Hola clase";

if (color == "verde" || color == "rojo") {
    alert("Como desees.");
    elementoParrafo.className=color;
}
else {
    alert("Solo puede ser rojo o verde, en minúsculas")
}

//elementoParrafo afecta a los parrafos debido al let elementoParrafo anterior.
//La propiedad "inerHTML" es el contenido de la página.
//Con .tolowerCase pasamos algo a minusculas, puede hacerse a mayusculas con su contrrio.