const listaTweets = document.getElementById('lista-tweets');
const formulario = document.getElementById('formulario');
let tweets = [];

eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
    
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets') ) || []  ;
        crearHTML();
     });
}

function agregarTweet(event){
    event.preventDefault();
    const tweet = document.getElementById('tweet').value;

    if(tweet === ''){
        mostrarError('Por favor, ingresa algún texto antes de enviar el tweet. No se pueden enviar tweets vacíos.');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    tweets = [...tweets, tweetObj];
    crearHTML();
    formulario.reset()
}

function mostrarError(error){
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const contenido = document.getElementById('contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000)
}

function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach(tweet => {
            const btnEliminar = document.createElement('A');
            btnEliminar.classList = 'borrar-tweet';
            btnEliminar.textContent = 'X';
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            const li = document.createElement('LI');
            li.textContent = tweet.tweet;
            li.appendChild(btnEliminar);
            listaTweets.appendChild(li);
        });
    }
    sincronizarStorage();

}

function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id != id  );
    crearHTML();
}

function limpiarHTML(){
    while(listaTweets.firstChild) {
         listaTweets.removeChild(listaTweets.firstChild);
    }
}
