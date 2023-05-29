const Tateti = require('../tateti');

describe('Tateti', () => {
    let juego;

    beforeEach(() => {
        juego = new Tateti();
    });

    test('Devuelve mensaje de error "Movimiento inválido. Intenta nuevamente"', () => {
        expect(() => {
            juego.hacerMovimiento(0, 0); // Movimiento válido
            juego.hacerMovimiento(0, 0); // Movimiento inválido, misma posición
        }).toThrowError('Movimiento inválido. Intenta nuevamente');
    });
});