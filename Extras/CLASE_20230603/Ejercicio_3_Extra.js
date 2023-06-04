// EJERCICIO CLASE 2023-06-03 EXTRA N° 3

// Dada una variable cadena de tipo String queremos otra cadena que sólo tenga su inicial en minúscula

let cadena = "EJEMPLO";

console.log("String: " + cadena)

let inicial = cadena.charAt(0);

console.log("Inicial: " + inicial)

let inicialMinuscula = inicial.toLowerCase();

console.log("Inicial en minúscula: " + inicialMinuscula);

let cadenaANTERIOR = cadena.slice(1);

console.log("Resto de la cadena sin la inicial: " + cadenaANTERIOR);

console.log("Resultado del Ejercicio: " + inicialMinuscula + cadenaANTERIOR);

//
console.log("---------------------------------");
//

// Ejercicio en POCAS líneas:
let stringCadena = "EJEMPLO";
let iniMinuscula = stringCadena.charAt(0).toLowerCase() + stringCadena.slice(1);
console.log("Resultado del Ejercicio: " + iniMinuscula);


