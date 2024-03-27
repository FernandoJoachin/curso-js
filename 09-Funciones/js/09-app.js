/**Añadir Funciones en un Objeto*/
const reproductor = {
    reproducir: function(cancion, artista){
        console.log(`Reproduciendo ${cancion} - ${artista}`)
    },
    pausar: function(){
        console.log("Pausando...");
    },
    borrar: function(cancion, artista){
        console.log(`Borrando ${cancion} - ${artista}`)
    },
    crearPlayList: function(nombre){
        console.log(`Creando la PlayList: ${nombre}`);
    },
    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo la PlayList ${nombre}`);
    }
}

reproductor.reproducir('Dame','Nicki Nicole, Tiago PZK');
reproductor.pausar();
reproductor.borrar('Dame','Nicki Nicole, Tiago PZK');
reproductor.crearPlayList('Para hacer Loopcrack');
reproductor.reproducirPlayList('Para hacer Loopcrack');