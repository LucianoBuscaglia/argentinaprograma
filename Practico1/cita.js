// PRACTICO N° 1 - PARTE 2: COMANDOS BÁSICOS - EJERCICIO N° 4
// Manejo de strings: Deberás crear un programa en el archivo cita.js. En esta
// tarea, se te proporcionan dos variables, cita y substring, que contienen dos
// cadenas. Nos gustaría que:
//     a. Recuperes la longitud de la cita y la guardes en una variable llamada
//        tamañoDeCita. Deberás imprimir por consola un mensaje con el siguiente formato:
//        “El tamaño de la cita es: [tamañoCita]”
//     b. Busques la posición del índice donde aparece substring en cita, y
//        almacenes ese valor en una variable llamada indice. Deberás imprimir
//        por consola un mensaje con el siguiente formato:
//        “El indice del substring es: [indice]”
//     c. Usa una combinación de las variables que tienes y las
//        propiedades/métodos de cadena disponibles para recortar la cita original a 
//        "Tres tristes tigres comen trigo", y la guardes en una variable llamada citaRevisada. 
//        Por último, para verificar que el valor de citaRevisada es correcto, deberás imprimirla 
//        por consola.

//        Los valores iniciales de cita y substring son los siguientes:
//        ● cita = “Tres tristes tigres comen trigo en un trigal”
//        ● substring = “tigres comen trigo”

let cita= "Tres tristes tigres comen trigo en un trigal";
let subString = "tigres comen trigo";

let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: %s", tamañoDeCita);

let posIndice = cita.indexOf(subString);
console.log("El indice del substring es: %i", posIndice);

let citaRevisada=cita.slice(0, posIndice + subString.length);
console.log("La cita revisada es: %s", citaRevisada);
