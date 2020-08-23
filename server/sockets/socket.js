const { io } = require('../server');

//Aqui identifico cuando un cliente se conecta al servidor, 
//El parametro cliente, contiene toda la informacion del cliente
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario esconectado');
    });

    //Escucahr el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /*  if (data.usuario) {
             callback({
                 resp: 'TODO SALIO BIEN!'
             });
         } else {
             callback({
                 resp: 'TODO SALIO MAL!!!!'
             });
         } */



    });


});