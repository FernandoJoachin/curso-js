/**Detener la ejecución de un if con una función */
const puntajeFinal = 500;

function revisarPuntaje(){
    if(puntajeFinal > 400){
        console.log('Excelente puntaje');
        return;
    }

    if(puntajeFinal > 300){
        console.log('Buen puntaje');
        return;
    }
}

revisarPuntaje();