/**Uso del break y continue */
const carrito = [
    {nombre: "Televisor", precio: 1000},
    {nombre: "Celular", precio: 500},
    {nombre: "Tablet", precio: 800, descuento: true},
    {nombre: "Reloj", precio: 300},
]

//Break
function buscarArticuloConDescuento(articulos){
    
    for(let i = 0; i < articulos.length; i++){
        if(carrito[i].descuento){
            console.log(`El artículo: ${carrito[i].nombre}, tiene un descuento`);
            break
        }
    }
}
buscarArticuloConDescuento(carrito);

//Continue
function buscarArticuloSinDescuento(articulos){
    console.log('Los siguientes artículos no tienen descuentos:');
    for(let i = 0; i < articulos.length; i++){
        if(carrito[i].descuento){
            continue
        }
        console.log(`${carrito[i].nombre}`);

    }
}
buscarArticuloSinDescuento(carrito);