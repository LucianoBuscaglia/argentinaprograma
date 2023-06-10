// PRACTICO N° 1 - PARTE 2: COMANDOS BÁSICOS - EJERCICIO N° 3
// Operadores aritméticos:
//    a. Crea cuatro variables que contengan valores numéricos.
//    b. Suma las dos primeras variables y guarda el resultado en otra variable.
//    c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
//    d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el
//       resultado en una variable llamada resultadoFinal. El producto debe ser 44. 
//       si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
//    e. Escribe un cálculo que verifique si resultadoFinal es un número par.
//       Almacene el resultado en una variable llamada esPar.
//    f. Imprima por consola un mensaje con el siguiente formato:
//       “Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La
//        respuesta a verificar si el resultado final es par es: [esPar]”
//    g. Deberá guardar este programa en un archivo llamado operacionesAritmeticas.js

let num1 = 1, num2 = 3,  num3 = 15, num4= 4;
let suma = num1 +num2;
let resta =num3-num4;
let resultadoFinal = suma * resta;
// console.log(resultadoFinal)
if (resultadoFinal !== 44) {
    console.log("El producto no es igual a 44, por favor revisar las variables.")
}
let esPar= resultadoFinal % 2 === 0
console.log("Mis variables iniciales fueron: %i, %i, %i y %i. La respuesta a verificar si el resultado final es par es:", num1,num2,num3,num4, JSON.stringify(esPar))
