/**Añadir Funciones en un Objeto*/
const reproductor = {
    cancion: '',
    set nuevaCancion (cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}...`);
    },
    get obtenerCancion () { 
        console.log(`${this.cancion}`)
    },
    reproducir: (cancion, artista) => console.log(`Reproduciendo ${cancion} - ${artista}`),
    pausar: () => console.log("Pausando..."),
    borrar: (cancion, artista) => console.log(`Borrando ${cancion} - ${artista}`),
    crearPlayList: nombre => console.log(`Creando la PlayList: ${nombre}`),
    reproducirPlayList: nombre => console.log(`Reproduciendo la PlayList ${nombre}`)
}

reproductor.nuevaCancion = "Columbia";
reproductor.obtenerCancion;
reproductor.reproducir('Dame','Nicki Nicole, Tiago PZK');
reproductor.pausar();
reproductor.borrar('Dame','Nicki Nicole, Tiago PZK');
reproductor.crearPlayList('Para hacer Loopcrack');
reproductor.reproducirPlayList('Para hacer Loopcrack');