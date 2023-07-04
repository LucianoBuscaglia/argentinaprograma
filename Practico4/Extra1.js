// EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el
// código para su correcta utilización.

const readlineSync = require('readline-sync');

const PIEDRA = 0;
const PAPEL = 1;
const TIJERA = 2;

function obtenerJugadaComputadora() {
    return Math.floor(Math.random() * 3);
}

console.log("BIENVENIDO AL JUEGO DE: PIEDRA, PAPEL O TIJERA.");
console.log(" ");

function obtenerJugadaUsuario() {
    let opciones = ["PIEDRA", "PAPEL", "TIJERA"];
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
    } else if (
        (jugadaComputadora === PIEDRA && jugadaUsuario === TIJERA) ||
        (jugadaComputadora === PAPEL && jugadaUsuario === PIEDRA) ||
        (jugadaComputadora === TIJERA && jugadaUsuario === PAPEL)
    ) {
        return "Gana la computadora";
    } else {
        return "Gana el usuario";
    }
}

function jugarPiedraPapelTijeras() {
    let jugadaComputadora = obtenerJugadaComputadora();
    let jugadaUsuario = obtenerJugadaUsuario();
    let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

    let opciones = ["piedra", "papel", "tijera"];
    let mensajeJugadaComputadora = opciones[jugadaComputadora];
    let mensajeJugadaUsuario = opciones[jugadaUsuario];
    console.log(" ");
    console.log("La computadora eligió: " + mensajeJugadaComputadora + ". " + "El usuario eligió: " + mensajeJugadaUsuario + ". ");
    console.log(" ");
    console.log("El resultado fue: " + resultado + ".");
}

jugarPiedraPapelTijeras();