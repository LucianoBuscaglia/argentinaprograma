// PRACTICO N° 02 - EJERCICIO 2

// Escriba un programa que solicite al usuario ingresar un número entero del 1 al
// 12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
// marzo, etc. Deberá guardar esta información en alguna de las estructuras ya
// vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en
// el texto a imprimir. Su programa deberá ser guardado en un archivo meses.js y
// consistirá de imprimir por consola la cantidad de días que tiene el mes
// ingresado bajo el siguiente formato:
// "La cantidad de dias del mes de [mes] es [cantidadDeDias]"
// Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad
// de dias del mes de enero es 31”.
// NOTAS:
// ● Nota que el valor de [mes] no es el numero ingresado si no su
// correspondiente almacenado en la estructura de datos elegida.
// ● Para el alcance de este ejercicio, podemos pensar que febrero siempre
// tiene 28 días.

const readlineSync = require('readline-sync');

let meses = {  1: "ENERO", 2: "FEBRERO", 3: "MARZO", 4: "ABRIL", 5: "MAYO", 6: "JUNIO", 
               7: "JULIO", 8: "AGOSTO", 9: "SEPTIEMBRE", 10: "OCTUBRE", 11: "NOVIEMBRE", 
               12: "DICIEMBRE"};

let mes = Number(readlineSync.question("Ingrese un numero del 1 al 12 representando un mes del año: "));

if (mes>= 1 && mes<= 12) {
    
    let nombreMes = meses[mes];
    let cantidadDeDias;
    if (mes===2) {
        cantidadDeDias= 28;
    } else if (mes === 4 || mes ===  6 || mes === 9 ||mes === 11) {
        cantidadDeDias= 30;
    } else {
        cantidadDeDias= 31;
    }
   console.log(`La cantidad de dias del mes de ${nombreMes} es ${cantidadDeDias}.`); 
} else {
   console.log("NO VALIDO! El número ingresado no corresponde a un mes."); 
}