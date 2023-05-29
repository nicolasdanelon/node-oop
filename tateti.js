const { assert } = require("console");

class Tateti {
    constructor() {
        this.tablero = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ];
        this.turno = "X";
    }

    imprimirTablero() {
        console.log("Tablero:");
        for (let i = 0; i < this.tablero.length; i++) {
            console.log(this.tablero[i].join(" | "));
            if (i < this.tablero.length - 1) {
                console.log("---------");
            }
        }
    }

    hacerMovimiento(fila, columna) {
        if (this.tablero[fila][columna] === " ") {
            this.tablero[fila][columna] = this.turno;
            this.imprimirTablero();
            if (this.hayGanador()) {
                console.log(`¡${this.turno} es el ganador!`);
            } else if (this.hayEmpate()) {
                console.log("¡Empate!");
            } else {
                this.cambiarTurno();
            }
        } else {
            throw new Error("Movimiento inválido. Intenta nuevamente.");
        }
    }

    cambiarTurno() {
        this.turno = this.turno === "X" ? "O" : "X";
        console.log(`Turno del jugador ${this.turno}`);
    }

    hayGanador() {
        const t = this.tablero;

        // Comprobación de filas
        for (let i = 0; i < 3; i++) {
            if (t[i][0] !== " " && t[i][0] === t[i][1] && t[i][0] === t[i][2]) {
                return true;
            }
        }

        // Comprobación de columnas
        for (let j = 0; j < 3; j++) {
            if (t[0][j] !== " " && t[0][j] === t[1][j] && t[0][j] === t[2][j]) {
                return true;
            }
        }

        // Comprobación de diagonales
        if (
            (t[0][0] !== " " && t[0][0] === t[1][1] && t[0][0] === t[2][2]) ||
            (t[0][2] !== " " && t[0][2] === t[1][1] && t[0][2] === t[2][0])
        ) {
            return true;
        }

        return false;
    }

    hayEmpate() {
        for (let i = 0; i < this.tablero.length; i++) {
            for (let j = 0; j < this.tablero[i].length; j++) {
                if (this.tablero[i][j] === " ") {
                    return false;
                }
            }
        }
        return true;
    }

    resetearJuego() {
        this.tablero = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ];
        this.turno = "X";
        console.log("Juego reiniciado.");
    }
}

module.exports = Tateti;

// Ejemplo de uso
const juego = new Tateti();

// Iniciar el juego
console.log("¡Bienvenido al juego del Tateti!");
juego.imprimirTablero();
console.log(`Turno del jugador ${juego.turno}`);

// Realizar movimientos
juego.hacerMovimiento(0, 0); // Jugador X
juego.hacerMovimiento(1, 1); // Jugador O
juego.hacerMovimiento(0, 1); // Jugador X
juego.hacerMovimiento(2, 1); // Jugador O
juego.hacerMovimiento(0, 2); // Jugador X

// Resetear el tablero
juego.resetearJuego();
