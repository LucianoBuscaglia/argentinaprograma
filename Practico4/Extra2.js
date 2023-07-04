// EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
// juego, es decir:
// ● Una jugada: gana el ganador de esa única jugada.
// ● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
// el usuario gane una jugada y la computadora la otra.
// ● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc

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
    let opciones = ["piedra", "papel", "tijera"];
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
    const jugadasTotales = readlineSync.question("Ingrese la cantidad de jugadas para terminar el juego: ");
    let jugadasNecesarias = Math.ceil(jugadasTotales / 2);
    let acumGanadosComputadora = 0;
    let acumGanadosUsuario = 0;

    for (let i = 0; i < jugadasTotales; i++) {
        let jugadaComputadora = obtenerJugadaComputadora();
        let jugadaUsuario = obtenerJugadaUsuario();
        let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
        let opciones = ["piedra", "papel", "tijera"];
        console.log(" ");
        console.log("La computadora eligió: " + opciones[jugadaComputadora] + ". El usuario eligió: " + opciones[jugadaUsuario] + ".");
        console.log(" ");
        console.log("El resultado fue: " + resultado + ".");

        if (resultado === "Gana la computadora") {
            acumGanadosComputadora++;
        } else if (resultado === "Gana el usuario") {
            acumGanadosUsuario++;
        }
        if (acumGanadosComputadora >= jugadasNecesarias || acumGanadosUsuario >= jugadasNecesarias) {
            break;
        }
    }
    console.log(" ");
    if (acumGanadosComputadora > acumGanadosUsuario) {
        console.log("La computadora ha ganado el juego.");
    } else if (acumGanadosComputadora < acumGanadosUsuario) {
        console.log("El usuario ha ganado el juego.");
    } else {
        console.log("El juego ha terminado en empate.");
    }
}

console.log(" ");

jugarPiedraPapelTijeras();

