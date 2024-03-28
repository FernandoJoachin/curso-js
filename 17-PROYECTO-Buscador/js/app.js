const resultado = document.getElementById('resultado');

const selectMarca = document.getElementById('marca');
const selectYears = document.getElementById('year');
const selectPrecioMinimo = document.getElementById('minimo');
const selectPrecioMaximo = document.getElementById('maximo');
const selectPuertas = document.getElementById('puertas');
const selectTransmision = document.getElementById('transmision');
const selectColor = document.getElementById('color');

const maxYear = new Date().getFullYear();
const minYear  = maxYear - 10;

const datosBusqueda = {
    marca : '',
    year: '',
    precioMinimo : '',
    precioMaximo: '',
    puertas: '',
    transmision:'',
    color:''
}

document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos);
    llenarSelectYears();
});


selectMarca.addEventListener('input', event => {
    datosBusqueda.marca = event.target.value;
    filtrarAutos();
});

selectYears.addEventListener('input', event => {
    datosBusqueda.year = Number(event.target.value);
    filtrarAutos();
});

selectPrecioMinimo.addEventListener('input', event => {
    datosBusqueda.precioMinimo = Number(event.target.value);
    filtrarAutos();
});


selectPrecioMaximo.addEventListener('input', event => {
    datosBusqueda.precioMaximo = Number(event.target.value);
    filtrarAutos();
    
});

selectPuertas.addEventListener('input', event => {
    datosBusqueda.puertas = Number(event.target.value);
    filtrarAutos();
});

selectTransmision.addEventListener('input', event => {
    datosBusqueda.transmision = event.target.value;
    filtrarAutos();
});

selectColor.addEventListener('input', event => {
    datosBusqueda.color = event.target.value;
    filtrarAutos();
    console.log(datosBusqueda);
});

function mostrarAutos(autos){
    limpiarHTML();
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio} - Color: ${color}`;
        resultado.appendChild(autoHTML);
    });
}

function llenarSelectYears(){
    for(let i = maxYear; i >= minYear; i--){
        const option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option);
    }
}

function filtrarAutos(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPrecioMaximo).filter(filtrarPrecioMinimo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'Lo sentimos, no pudimos encontrar ningún resultado para tu búsqueda';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarPrecioMinimo(auto){
    const {precioMinimo} = datosBusqueda;
    if(precioMinimo){
        return auto.precio >= datosBusqueda.precioMinimo;
    }
    return auto;
}

function filtrarPrecioMaximo(auto){
    const {precioMaximo} = datosBusqueda;
    if(precioMaximo){
        return auto.precio <= datosBusqueda.precioMaximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}