/**Map */
/* Es una estructura de datos que almacena pares clave-valor donde las claves pueden ser de cualquier tipo, incluyendo objetos o valores primitivos, y los valores pueden ser cualquier tipo de dato. */

const cliente = new Map();
cliente.set('nombre', 'Roberto');
cliente.set('tipo', 'VIP');
cliente.set('saldo', 2500);
cliente.set('autenticado', true);

console.log(cliente.size);
console.log(cliente.has('tipo'));
console.log(cliente.get('saldo'));

console.log(cliente);
console.log(cliente.delete('autenticado'));
console.log(cliente);
/* cliente.clear();
console.log(cliente); */

const paciente = new Map([['nombre', 'José'], ['enfermedad', 'diarrea']]);
paciente.set('doctor', 'Dr.Simi');
paciente.set('nombre', 'Antonio');
console.log(paciente);

paciente.forEach((valor, clave) => console.log(valor, clave));