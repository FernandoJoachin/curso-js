const cliente = {
    nombre: 'Fernando',
    balance: 6000
};

describe('Testing del Cliente', () => {
    test('Validar si el cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(1500);
    });

    test('Validar si es Fernando', () => {
        expect(cliente.nombre).toBe('Fernando');
    });
})