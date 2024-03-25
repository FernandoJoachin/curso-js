/**Speech API */
const salida = document.getElementById('salida');
const microfono = document.getElementById('microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI(){
    const SpeechRecognition =  webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function(){
        salida.classList.add('mostrar');
        salida.textContent = "Grabando...";
    };

    recognition.onspeechend = function(){
        salida.textContent = "Se detuvo la grabación";
        recognition.stop();
    };

    recognition.onresult = function(event){
        const {confidence, transcript} = event.results[0][0];

        const speech = document.createElement('P');
        speech.textContent = `Resultado: ${transcript}`;

        const seguridad = document.createElement('P');
        seguridad.textContent = `Seguridad: ${parseInt(confidence * 100)}%`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    };
}