/**Notification API */
/* Es una API del navegador que permite a las aplicaciones web mostrar notificaciones al usuario, siempre que este haya otorgado permiso para recibirlas. */
const noticarBtn = document.getElementById('notificar');

noticarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(respuesta => {
            console.log('El resultado es ' + respuesta);
        })
});

const verNotificacion = document.getElementById('verNotificacion')
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Codigo con Fer, aprende proyectores reales'
        });
        notificacion.onclick = () => {
            window.open('https://www.codigoconjuan.com');
        }
    }
})