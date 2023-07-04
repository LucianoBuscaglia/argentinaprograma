
const readlineSync = require('readline-sync');


function obtenerJugadaComputadora() {

        return Math.floor(Math.random() * 3);

}

console.log("BIENVENIDO AL JUEGO DE: PIEDRA, PAPEL O TIJERA.");
console.log(" ");

function obtenerJugadaUsuario() {
    let opciones = ["piedra","papel","tijera"];
    console.log("Estas son tus opciones:");
    console.log(" ");
    opciones.forEach((opcion, index) => {
        console.log(`${index}: ${opcion}`);
        console.log(" ");
    });
    const respuesta = readlineSync.question("Por favor, elije tu jugada: ");
    let index = parseInt(respuesta);
        return index;
}


function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
        return "Empate";
    } else if ((jugadaComputadora === 0 && jugadaUsuario === 2) || (jugadaComputadora === 1 && jugadaUsuario === 0) || (jugadaComputadora === 2 && jugadaUsuario === 1)) {
        return "Gana la computadora";
    } else {
        return "Gana el usuario";
    }
 }


 
 function jugarPiedraPapelTijeras(){
    let jugadaComputadora = obtenerJugadaComputadora();
    let jugadaUsuario = obtenerJugadaUsuario();
    let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

    let opciones = ["piedra","papel","tijera"];
    let mensajeJugadaComputadora = opciones[jugadaComputadora];
    let mensajeJugadaUsuario = opciones[jugadaUsuario];
    console.log(" ");
    console.log("La computadora eligió: " + mensajeJugadaComputadora + ". " + "El usuario eligió: " + mensajeJugadaUsuario + ". " );
    console.log(" ");
    console.log("El resultado fue: " + resultado + ".");    
 
 }

 jugarPiedraPapelTijeras();