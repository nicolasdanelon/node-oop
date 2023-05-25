const Tateti = require('../tateti.js');

describe('Tateti', () => {
    let juego;

    beforeEach(() => {
        juego = new Tateti();
    });

    afterEach(() => {
        juego.resetearJuego();
    });

    test('El tablero se reinicia correctamente', () => {
        // Realizar cambios en el tablero
        juego.tablero[0][0] = "X";
        juego.tablero[1][1] = "O";

        // Reiniciar el juego
        juego.resetearJuego();

        // Comprobar que el tablero se haya reiniciado correctamente
        expect(juego.tablero).toEqual([
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ]);
    });

    test('El turno se reinicia correctamente', () => {
        // Cambiar el turno
        juego.turno = "O";

        // Reiniciar el juego
        juego.resetearJuego();

        // Comprobar que el turno se haya reiniciado correctamente
        expect(juego.turno).toBe("X");
    });
});
