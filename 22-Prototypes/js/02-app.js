/**Problema de no usar Prototypes*/
// El problema que solucionan los prototypes es la duplicación innecesaria de código. Los Prototypes permiten compartir funciones y propiedades entre objetos, lo que evita duplicar código.

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const fer = new Cliente('Fernando', 3000);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(fer));

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `La empresa ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría: ${categoria}`;
}

const loopcrack = new Empresa('Loopcrack', 100000, 'Desarrolladora de Páginas Web');
console.log(formatearEmpresa(loopcrack));