const cliente = {
    nombre: 'Fernando',
    balance: 6000,
    tipo: 'VIP'
};

describe('Testing del Cliente', () => {
    test('Validar si es el mismo cliente', () => {
        expect(cliente).toMatchSnapshot();
    });

})