/**Traversing the DOM*/
/* Es la práctica de moverse de un nodo a otro dentro del árbol de nodos del Document Object Model (DOM) en una página web. */

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

/* En la estructura de navegación de una página web, cada elemento se identifica como un nodo. Estos nodos pueden ser enumerados de la siguiente manera: */
console.log(navegacion.childNodes); //Los espacios blancos son considerados elementos
console.log(navegacion.children);

console.log(navegacion.children[0].nodeType) // Indica el tipo de nodo que representa
/* 
1: Elemento (NodeType.ELEMENT_NODE): representa un elemento HTML.
2: Atributo (NodeType.ATTRIBUTE_NODE): representa un atributo de un elemento HTML.
3: Texto (NodeType.TEXT_NODE): representa texto dentro de un elemento.
8: Comentario (NodeType.COMMENT_NODE): representa un comentario.
9: Documento (NodeType.DOCUMENT_NODE): representa todo el documento HTML.
11: Fragmento de Documento (NodeType.DOCUMENT_FRAGMENT_NODE): representa un fragmento de documento.
 */
console.log(navegacion.children[0].nodeName) // Es la etiqueta

//Modificar elementos con Traversing the Dom
const card = document.querySelector('.card');
card.children[1].children[1].textContent = "Traversing the DOM";
card.children[0].src = 'img/hacer3.jpg'
console.log(card);

// Formas de acceder al primer elemento
console.log(navegacion.firstElementChild);

//Formas de acceder al último elemento
console.log(navegacion.lastElementChild);

//Traversing del hijo al padre
//console.log(card.parentNode) //Considera los espacios en blanco
console.log(card.parentElement)

// Traversing a elementos que estan en el mismo nivel , es decir, ir a elementos hermanos.
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);


// Ir a un elemento previo
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard)
console.log(ultimoCard.previousElementSibling);