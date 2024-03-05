function iniciarApp(){
    const selectCategorias = document.getElementById('categorias');
    obtenerCategorias();
    selectCategorias.addEventListener('change', seleccionarCategoria);

    function obtenerCategorias(){
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(resultado => resultado.json())
            .then(resultado => mostrarCategorias(resultado.categories))
    }

    function mostrarCategorias(categorias = []){
        categorias.forEach(categoria => {
            const {strCategory} = categoria;
            const option = document.createElement('OPTION');
            option.value = strCategory;
            option.textContent = strCategory;
            selectCategorias.appendChild(option);
        });
    }

    function seleccionarCategoria(event){
        const categoria = event.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
        fetch(url)
            .then(resultado => resultado.json())
            .then(resultado => console.log(resultado))
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);