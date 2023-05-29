const Tateti = require('../tateti');

describe('Tateti', () => {
    let juego;

    beforeEach(() => {
        juego = new Tateti();
    });

    test('Detecta una victoria por columnas correctamente', () => {
        juego.tablero = [
            ['O', ' ', 'X'],
            [' ', ' ', 'X'],
            ['O', ' ', 'X'],
        ];

        expect(juego.hayGanador()).toBe(true);
        expect(juego.hayEmpate()).toBe(false);
    });
});
