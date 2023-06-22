// PRACTICO N° 02 - EJERCICIO 4

// Escriba un programa que solicite al usuario ingresar un número del 1 al 7
// representando un día de la semana. Guardar el programa en un archivo
// diasDeLaSemana.js. La semana comienza el lunes y termina el domingo.
// - Si el número es 1, muestra por consola el mensaje: "Hoy es lunes".
// - Si el número es 2, muestra por consola el mensaje: "Hoy es martes".
// - Si el número es 3, muestra por consola el mensaje: "Hoy es miércoles".
// - Y así sucesivamente ...
// - Para cualquier otro número, muestra por consola el mensaje: "Número
// inválido".
// NOTA: utilizar la sentencia switch-case.

const readlineSync = require('readline-sync');
let ingreso = parseInt(readlineSync.question("Por favor, ingrese un numero del 1 al 7 para representar a un dia de la semana: "));

ingreso = Number(ingreso);
let diaDeLaSemana;
let mensajeNumInvalido;

switch (ingreso) {
    case 1:
        diaDeLaSemana = "Lunes";
        break;

    case 2:
        diaDeLaSemana = "Martes";
        break;
       
    case 3:
        diaDeLaSemana = "Miercoles";
        break;

    case 4:
        diaDeLaSemana = "Jueves";
        break;

    case 5:
        diaDeLaSemana = "Viernes";
        break;

    case 6:
        diaDeLaSemana = "Sabado";
        break;

    case 7:
        diaDeLaSemana = "Domingo";
        break;

    default:
        mensajeNumInvalido = "Numero Invalido";
        break;
}


if (diaDeLaSemana) {
    console.log("Hoy es " + diaDeLaSemana);
} else {
    console.log(mensajeNumInvalido);
}
