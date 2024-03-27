/**Implicit Binding */
/* El "Implicit Binding" en JavaScript se refiere al proceso mediante el cual el valor del this dentro de una función es determinado por el objeto desde el cual se invoca esa función. Este tipo de enlace es conocido como "enlace implícito" porque no se especifica directamente, sino que se infiere basándose en cómo se llama la función. */

const usuario = {
    nombre: 'Fernando',
    edad: 20,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }, 
    mascota: {
        nombre: 'Hook',
        edad: 1, 
        informacion(){
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();