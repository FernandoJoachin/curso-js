const password = '123456';

describe('Testing de password', () => {
    test('Validar que el password no este vacio', () => {
        expect(password).not.toHaveLength(0);
    });

    test('Validar que el password tenga extension de 6', () => {
        expect(password).toHaveLength(6);
    });
})