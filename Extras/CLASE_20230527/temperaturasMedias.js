// EJERCICIO PRACTICO 0 EXTRA N° 3
//3.	Continuando con lo anterior, tenemos una tabla de las temperaturas 
// medias por mes de los doce meses en grados Fahrenheit; 
// cómo hacemos para calcular el promedio anual en Celsius?

let temperaturasFahrenheit = [40, 45, 50, 55, 60, 70, 80, 85, 75, 65, 55, 45];

let sumaTotalFahrenheit = temperaturasFahrenheit[0] + temperaturasFahrenheit[1] + temperaturasFahrenheit[2] + temperaturasFahrenheit[3] + temperaturasFahrenheit[4] + temperaturasFahrenheit[5] + temperaturasFahrenheit[6] + temperaturasFahrenheit[7] + temperaturasFahrenheit[8] + temperaturasFahrenheit[9] + temperaturasFahrenheit[10] + temperaturasFahrenheit[11];

let promedioFahrenheit = sumaTotalFahrenheit / 12

let promedioCelsius = (promedioFahrenheit - 32) * (5 / 9);

console.log("El promedio anual de temperaturas es: " + promedioCelsius + " grados Celsius.");

