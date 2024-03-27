const carritoDeCompras = ["Camisa", "Pantalón", "Zapatos"];

describe('Testing de carrito de compras', () => {
    test('Validar que el carrito no este vacio', () => {
        expect(carritoDeCompras).not.toHaveLength(0);
    });

    test('Validar que el carrito tenga 3 productos', () => {
        expect(carritoDeCompras).toHaveLength(3);
    });
})