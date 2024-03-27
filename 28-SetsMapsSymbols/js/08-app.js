/**Nuevamente Iteradores en JS */
const ciudades = ['Nueva York', 'Venecia', 'París', 'Lima'];
const ordenes = new Set([123, 435, 102, 731]);
const datos = new Map();
datos.set('nombre', 'Fernando');
datos.set('profesion', 'Estudiante');

//Default
for(let ciudad of ciudades){
    console.log(ciudad);
}

for(let orden of ordenes){
    console.log(orden);
}
for(let dato of datos){
    console.log(dato);
}

console.log('');

//Entries Iterator
for(let entry of ciudades.entries()){
    console.log(entry);
}

for(let entry of ordenes.entries()){
    console.log(entry);
}

for(let entry of datos.entries()){
    console.log(entry);
}

console.log('');

//Values Iterator
for(let values of ciudades.values()){
    console.log(values);
}

for(let values of ordenes.values()){
    console.log(values);
}
for(let values of datos.values()){
    console.log(values);
}

console.log('');

//Keys Iterator
for(let keys of ciudades.keys()){
    console.log(keys);
}

for(let keys of ordenes.keys()){
    console.log(keys);
}

for(let keys of datos.keys()){
    console.log(keys);
}