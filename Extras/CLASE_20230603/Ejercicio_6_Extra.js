// EJERCICIO CLASE 2023-06-03 EXTRA N° 6.SIN RESOLVER.

// Si tenemos una cadena que satisface la condición del punto 5, 
// queremos devolver la cadena que tiene la inicial del nombre, 
// la inicial del apellido y los tres últimos dígitos del DNI.

let cadena = "Juan Perez, 123456789";
let partes = cadena.split(", ");

let nombreApellido = partes[0] || "";
let dni = partes[1] || "";

let nombre = nombreApellido.split(" ")[0] || "";
let apellido = nombreApellido.split(" ")[1] || "";
let ultimosDigitosDNI = dni.slice(-3) || "";

let cadenaReducida = nombre.charAt(0) + apellido.charAt(0) + ultimosDigitosDNI;

console.log(cadenaReducida);  // "JD789"


console.log(cadenaReducida);  // "JD789"


