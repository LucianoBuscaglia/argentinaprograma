// EJERCICIO CLASE 2023-06-03 EXTRA N° 5

// Dada una cadena queremos ver que tenga la forma “Nombre Apellido DNI” 
// donde DNI es una cadena sólo de dígitos.

let cadena = "Juan Perez 12346748";
let partes = cadena.split(" ");



// TEST STRING
let esNombre = typeof partes[0] === "string";
let esApellido = typeof partes[1] === "string";

// TEST NUMBER
let esNumDNI = /^\d+$/.test(partes[2]);

let cumpleCondiciones = esNombre && esApellido && esNumDNI;

console.log(cumpleCondiciones);

