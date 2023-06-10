// EJERCICIO CLASE 2023-06-03 EXTRA N° 1-RESUELTO

// Dada una variable cadena de tipo String queremos saber si sólo tiene dígitos.
// Esto es molesto.
// Primero podemos ver si un carácter c es un dígito con 
// > !isNaN(Number(c)) 
// entonces podemos transformar el String en un arreglo de caracteres
// > var caracteres = Array(cadena)
// luego mapeamos eso para todos los caracteres del arreglo
// > var sonDigitos = caracteres.map(e => !isNaN(Number(e)))
// eso nos da un arreglo de Booleanos y podemos reducirlo
// > var esNumero = sonDigitos.reduce((e,a) => e && a,true)


let cadena = "12345678hola";

let caracteres = Array(cadena);

console.log("muestra de Array: "+ caracteres);

let sonDigitos = caracteres.map(e => !isNaN(Number(e)));

console.log("Resultado del Mapeo: " + sonDigitos);

let esNumero = sonDigitos.reduce((e, a) => e && a, true);

console.log("Son números?:" + esNumero);

console.log("-----------------------");

let cadena1 = "12345678";

let caracteres1 = Array(cadena1);

console.log("muestra de Array: "+ caracteres1);

let sonDigitos1 = caracteres1.map(e => !isNaN(Number(e)));

console.log("Resultado del Mapeo: " + sonDigitos1);

let esNumero1 = sonDigitos1.reduce((e, a) => e && a, true);

console.log("Son números?:" + esNumero1);

console.log("-----------------------");

let cadena2 = "hola mundo";

let caracteres2 = Array(cadena2);

console.log("muestra de Array: "+ caracteres);

let sonDigitos2 = caracteres2.map(e => !isNaN(Number(e)));

console.log("Resultado del Mapeo: " + sonDigitos2);

let esNumero2 = sonDigitos2.reduce((e, a) => e && a, true);

console.log("Son números?:" + esNumero2);
