/**Operador de igualdad estricto */

// == igual a
// != diferente de

const puntaje = 2000;

if(puntaje == '2000'){
    console.log('Es igual');
}else{
    console.log('No es igual')
}

if(puntaje === '2000'){
    console.log('Es igual');
}else{
    console.log('No es igual')
}

// El operador == realiza conversion de tipo antes de comparar por ende el resultado anterior

// El operador === no realiza una conversion de tipo, por lo tanto da como resultado que no son iguales