/**Explicit Binding */
/* El "Explicit Binding" (enlace explícito) en JavaScript se refiere al proceso mediante el cual se especifica directamente el valor del this dentro de una función, utilizando los métodos call(), apply(), o bind(). */

function persona(elemento1, elemento2){
    console.log(`Mi nombre es: ${this.name} y escucho: ${elemento1} & ${elemento2}`);
}

const informacion = {
    name: 'Fernando',
}

const musicaFavorita = ['Rap', 'Trap'];
// Este método llama a una función con un valor específico de this y con argumentos pasados individualmente.
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

//Similar a call(), pero recibe los argumentos como un array.
persona.apply(informacion, musicaFavorita);

//Este método crea una nueva función que, cuando se llama, tiene su valor de this establecido al valor proporcionado, con los argumentos preestablecidos si se proporcionan.
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();
