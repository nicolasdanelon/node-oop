const Tateti = require('../tateti');

describe('Tateti', () => {
    let juego;

    beforeEach(() => {
        juego = new Tateti();
    });

    test('Detecta una victoria por diagonal correctamente', () => {
        // Realizar movimientos para lograr una victoria por diagonal
        juego.hacerMovimiento(0, 0); // Jugador X
        juego.hacerMovimiento(0, 1); // Jugador O
        juego.hacerMovimiento(1, 1); // Jugador X
        juego.hacerMovimiento(0, 2); // Jugador O
        juego.hacerMovimiento(2, 2); // Jugador X

        // Verificar que haya un ganador por diagonal
        expect(juego.hayGanador()).toBe(true);
        expect(juego.hayEmpate()).toBe(false);
    });
});
