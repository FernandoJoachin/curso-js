/**For in */
//A diferencia de For of que itera sobre los valores de un arreglo 
//For in itera  sobre las propiedades enumerables de un objeto

const producto = {
    nombre: "Monitor curvo",
    precio: 1000,
    disponible: true
}

for(let elemento in producto){
    console.log(elemento);
    console.log(producto[elemento]);
}

//Alternativa de usar for in con for of
for(let [key, value] of Object.entries(producto)){
    console.log(`Clave: ${key}, Valor: ${value}`);
}