/**NameSpace */
const restaurApp = {};

restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 99
    },
    {
        platillo: 'Hamburguesa',
        precio: 55
    },
    {
        platillo: 'Hot Dog',
        precio: 30
    }
];

restaurApp.funciones = {
    mostrarMenu: platillos => {
        console.log('Bienvenidos a nuestro menú:');

        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`);
        });
    },

    ordenar: id => {
        console.log(`Tu platillo: ${restaurApp.platillos[id].platillo} se esta preparando...`);
    },

    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo);
    },
}

restaurApp.funciones.ordenar(1);
restaurApp.funciones.agregarPlatillo('Taco', 20);

const {platillos} = restaurApp;
restaurApp.funciones.mostrarMenu(platillos);
