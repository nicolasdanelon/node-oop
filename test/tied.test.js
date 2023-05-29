const Tateti = require('../tateti');

describe('Tateti', () => {
    let juego;

    beforeEach(() => {
        juego = new Tateti();
    });

    test('Detecta un empate correctamente', () => {
        // Realizar movimientos para llegar a un empate
        juego.hacerMovimiento(0, 0); // Jugador X
        juego.hacerMovimiento(1, 0); // Jugador O
        juego.hacerMovimiento(2, 0); // Jugador X
        juego.hacerMovimiento(1, 1); // Jugador O
        juego.hacerMovimiento(0, 1); // Jugador X
        juego.hacerMovimiento(2, 1); // Jugador O
        juego.hacerMovimiento(1, 2); // Jugador X
        juego.hacerMovimiento(0, 2); // Jugador O
        juego.hacerMovimiento(2, 2); // Jugador X


        // Verificar que el juego haya terminado en empate
        expect(juego.hayGanador()).toBe(false);
        expect(juego.hayEmpate()).toBe(true);
    });
});