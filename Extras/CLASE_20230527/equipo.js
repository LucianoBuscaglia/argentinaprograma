// EJERCICIO PRACTICO 0 EXTRA N° 4

// Queremos representar un equipo de fútbol 5. Para ello necesitamos tener el nombre de cada jugador, 
// su posición (arco, defensa, mediocampo, adelante) y su edad. 
// ¿Cómo representamos a cada jugador? ¿Cómo representamos un equipo? 
// ¿Cómo representamos los 8 equipos que juegan el torneo?


// ¿Cómo representamos a cada jugador?. Sería lo mismo para cada jugador de cada equipo.
let jugador1 = {nombre: "juan", posicion: "arco", edad: "22"};
let jugador2 = {nombre: "pedro", posicion: "defensa", edad: "19"};
let jugador3 = {nombre: "pablo", posicion: "mediocampo", edad: "23"};
let jugador4 = {nombre: "luis", posicion: "adelante", edad: "20"};

// ¿Cómo representamos un equipo? Seria lo mismo para cada equipo.
let equipo1 = [jugador1, jugador2, jugador3, jugador4];

// ¿Cómo representamos los 8 equipos que juegan el torneo?. 
// Para representar los  equipos debe ser:
// let equiposTorneo = [equipo1, equipo2, equipo3, equipo4, equipo5, equipo6, equipo7, equipo8];

let equiposTorneo = [equipo1];
