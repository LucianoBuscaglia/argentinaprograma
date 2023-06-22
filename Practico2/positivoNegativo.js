// PRACTICO N° 02 - EJERCICIO 1 - B

// Solicite al usuario ingresar un número. Si el número es positivo, muestra
// por consola el mensaje: "El numero es positivo". Si el número es igual a
// cero, muestra por consola el mensaje: "El numero es cero". Si el número
// es negativo, muestra por consola el mensaje: "El numero es negativo".
// Guardar el programa en un archivo con nombre positivoNegativo.js

const readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingrese un numero por favor: ");

numero = Number(numero);

if (numero === 0) {
    console.log("El numero es cero")
} else if (numero>0) {
    console.log("El numero es positivo")
} else {
    console.log("El numero es negativo")
}
