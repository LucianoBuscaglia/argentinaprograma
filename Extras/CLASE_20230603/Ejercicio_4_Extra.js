// EJERCICIO CLASE 2023-06-03 EXTRA N° 4. RESUELTO.-

// Dada una variable cadena de tipo String queremos separar las palabras; 
// es decir generar una lista de palabras. Ejemplos:

// > cadena = “Hola Pepe, soy Juan”
// queremos
// > resultado = [“Hola”, “Pepe,”, “soy” “Juan”]

// > cadena = “Miguel Pagano 43021032”
// queremos
// > resultado = [“Miguel”, ”Pagano”, “43021032”]

let cadena ="Hola Pepe, soy Juan";

let cadenaArray = cadena.split(" ");

console.log(cadenaArray);

// 

let cadena1 ="Miguel Pagano 43021032";

let cadenaArray1 = cadena1.split(" ");

console.log(cadenaArray1);