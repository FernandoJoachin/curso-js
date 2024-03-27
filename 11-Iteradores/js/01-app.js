/**For Loop */
for(let i = 0; i < 5; i++){
    if(i % 2 === 0){
        console.log(`El número ${i} es PAR`);
    }else{
        console.log(`El número ${i} es IMPAR`);
    }
}

const carrito = [
    {nombre: "Televisor", precio: 1000},
    {nombre: "Celular", precio: 500},
    {nombre: "Tablet", precio: 800},
    {nombre: "Reloj", precio: 300},
]

for(let i = 0; i < carrito.length; i++){
    console.log(`El artículo: ${carrito[i].nombre}, tiene un precio de $${carrito[i].precio}`)
}