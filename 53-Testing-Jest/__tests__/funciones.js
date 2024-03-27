function suma(a, b){
    return a + b;
}

function resta(a, b){
    return a - b;
}

describe('Testing de funciones', () => {
    test('Suma de 20 y 30', () => {
        expect(suma(20,30)).toBe(50);
    });

    test('Suma de 10 más 10 no debe dar 10', () => {
        expect(suma(10,10)).not.toBe(10);
    });

    test('Resta de 10 y 5', () => {
        expect(resta(10,5)).toBe(5);
    });

    test('Resta de 10 menos 10 no debe ser distinto a cero', () => {
        expect(resta(10,10)).not.toBe(1);
    });
})