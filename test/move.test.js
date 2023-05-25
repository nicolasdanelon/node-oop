const Tateti = require('../tateti');

describe('Tateti', () => {
    let juego;

    beforeEach(() => {
        juego = new Tateti();
    });

    test('El tablero vacío se imprime correctamente', () => {
        const tableroEsperado = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];

        expect(juego.tablero).toEqual(tableroEsperado);
    });

    test('El tablero con movimientos se imprime correctamente', () => {
        juego.hacerMovimiento(0, 0);
        juego.hacerMovimiento(0, 1);
        juego.hacerMovimiento(0, 2);

        const tableroEsperado = [
            ['X', 'O', 'X'],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];

        expect(juego.tablero).toEqual(tableroEsperado);
    });
});
