function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

/* Aumento del valor
    1 = americano 1.15
    2 = asiatico 1.05
    3 = europeo 1.35

    Si el seguro es básico se múltiplica por 30% mas
    Si el seguro es completo se múltiplica por 50% mas

*/
Seguro.prototype.cotizarSeguro = function (){
    let cantidad = 0;
    const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            console.log('Oopss, surgió un problema');
            return -1;
    }

    const diferencia = new Date().getFullYear() - parseInt(this.year);
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    if(this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }
    return cantidad;
}

function UI(){}

UI.prototype.llenarOpciones = () => {
    const maxYear = new Date().getFullYear();
    const minYear = maxYear - 20;
    const selectYear = document.getElementById('year');

    for(let i = maxYear; i > minYear; i--){
        let option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('DIV');
    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    formulario.insertBefore(div, document.getElementById('resultado'));
    setTimeout(() => {
        document.getElementsByClassName('mensaje')[0].remove();
    }, 3000);
}

UI.prototype.mostrarResultado = (total, seguro) => {
    const {marca, year, tipo} = seguro;
    let nombreMarca;

    switch(marca) {
        case '1':
            nombreMarca = 'Americano';
            break;
        case '2':
            nombreMarca = 'Asiatico';
            break;
        case '3':
            nombreMarca = 'Europeo';
            break;
        default:
            break;
    }

    const div = document.createElement('DIV');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class='header'>Tu Resumen: </p>
        <p class="font-bold">Marca: <span class="font-normal">${nombreMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold"> Total: <span class="font-normal">$${total}</span></p>
    `;

    const resultadoDiv = document.getElementById('resultado');
    const spinner = document.getElementById('cargando');
    spinner.style.display = 'block';
    setTimeout( () =>  {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    }, 3000);
}

const formulario = document.getElementById('cotizar-seguro');
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
})

eventListener();
function eventListener(){
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const marca = document.getElementById('marca').value;
        const year = document.getElementById('year').value;
        const tipo = document.querySelector('input[name=tipo]:checked').value;
        if(marca === '' || year === '' || tipo === ''){
            ui.mostrarMensaje('Todos los mensajes son obligatorios', 'error');
            return;
        }
    
        const resultados = document.querySelector('#resultado div');
        if(resultados != null) {
            resultados.remove();
        }

        ui.mostrarMensaje('Cotizando...', 'correcto');

        const seguro = new Seguro(marca, year, tipo);
        const total = seguro.cotizarSeguro();
        ui.mostrarResultado(total, seguro);
    });
}
