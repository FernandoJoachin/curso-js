/**Prevenir Event Bubbling con Delegation */
const cardDiv = document.querySelector('.card');
cardDiv.addEventListener('click', (event) => {
    if(event.target.classList.contains('categoria')){
        console.log('Click en categoria');
    }
    if(event.target.classList.contains('titulo')){
        console.log('Click en titulo');
    }
    if(event.target.classList.contains('precio')){
        console.log('Click en titulo');
    }
});