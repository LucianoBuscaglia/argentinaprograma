// EJERCICIO CLASE 2023-06-03 EXTRA N° 2. RESUELTO

// Dada una variable cadena de tipo String queremos saber si sólo tiene letras.
// La misma idea que antes pero ahora para chequear si c es una letra usamos:
// > RegExp(/^\p{L}/,'u').test(c)
// Eso funciona con letras con tilde y con la ñ.

let cadena = "ho2la";

let cadenaArray = cadena.split("");

// [h, o, 2, l, a]

let testArray = cadenaArray.map(e=> RegExp(/^\p{L}/,'u').test(e) )

// testArray = [true, true, false, true, true]

let respuesta = testArray.reduce((e, a) => e&&a, true)

console.log(respuesta)
