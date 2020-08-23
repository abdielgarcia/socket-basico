var socket = io();

//Aqui realizo conexion con el servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Aqui valido se por algun motivo me desconecto del servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Enviar informacion 
socket.emit('enviarMensaje', {
    usuario: 'Abdiel',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log(resp);
});

//Escucha 
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});