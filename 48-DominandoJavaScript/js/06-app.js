/**New Biding */
/* El "New Binding" (enlace mediante new) es un mecanismo de enlace utilizado en JavaScript cuando se crea una instancia de un objeto a partir de un constructor utilizando la palabra clave new. Este enfoque se utiliza comúnmente en la programación orientada a objetos en JavaScript para crear instancias de clases o constructoras. */

function Auto(model, color){
    this.model = model;
    this.color = color;
}
const auto = new Auto('Mustang', 'Azul');
console.log(auto);

// Window binding 
/* El "Window binding" es un término que describe el comportamiento de la palabra clave this cuando se usa fuera del contexto de cualquier objeto o función específica en JavaScript. En este caso, this se enlaza (binds) al objeto global, que en el entorno del navegador es el objeto window */
window.color = 'negro';
function obtenerColor(){
    console.log(color);
}
obtenerColor();