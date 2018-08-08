const net = require('net');
const asciiArt = require('./libs/mensajeServer.js');

const libs = require('./libs/core.js');

// Variable que tiene que ser eliminada al hacer la lógica del usuario
let contador = 0;

net.createServer((socket) => {
    socket.on('data', (data) => { 
        // TODO: Guardar la dirección como usuario existente
        // TODO: comprobar si es un nuevo usuario y dejarlo pasar
        // TODO: cuando se complete el handshake registrar el usuario. 

        // Esto se hace solo para que no de el error de handshake cuando el usuario envíe su datos
        if(contador == 0) {
            socket.write(libs.Handshake(data));
            contador++;
        } else {
            // Acá se tiene que descifrar los mensajes
            console.log(data);
        }   

    });
}).listen({
    host: 'localhost',
    port: 3030
}, () => {
    console.log('Se ha iniciado el servidor en el puerto 3030')
    // console.log(asciiArt.mensaje());
});