/**Weakset */
/* Ss una estructura de datos similar a un conjunto (Set), pero con algunas diferencias importantes en su comportamiento y uso, como por ejemplo: solo puede contener objetos, no es iterable y no permite operaciones como size o clear. */

const weakset = new WeakSet();
const cliente = {
    nombre: 'Fernando',
    saldo: 2000,
}

weakset.add(cliente);
console.log(weakset);
console.log(weakset.has(cliente));
console.log(weakset.delete(cliente));