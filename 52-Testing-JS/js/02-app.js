/**Más Funciones a nuestro Framework*/
function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

async function sumaAsync(a,b){
    return Promise.resolve(sumar(a,b));
}

let resultado = sumar(2,3);
let esperado = 3;

expected(esperado).toBe(resultado);


resultado = restar(5,2);
esperado = 3;

expected(esperado).toEqual(resultado);

test('Suma 10 + 20 y el resutado debe ser 30', async () => {
    const resultado = await sumaAsync(10,20);
    const esperado = 31;
    expected(esperado).toBe(resultado);
});

async function test(mensaje, callback){
    try {
        await callback();
        console.log(`El test: ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

function expected(esperado){
    return {
        toBe(resultado){
            if(resultado !== esperado){
                console.error(`El ${resultado} es diferente a lo esperado: la prueba no paso`)
            }else{
                console.log('La prueba paso correctamente');
            } 
        },
        toEqual(resultado){
            if(resultado !== esperado){
                console.error(`El ${resultado} no es igual a lo esperado: la prueba no paso`)
            }else{
                console.log('La prueba paso correctamente');
            } 
        }
    }
}
