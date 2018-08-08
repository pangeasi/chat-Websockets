const net = require('net');
const asciiArt = require('./libs/mensajeServer.js');
const config = require('./config/set-config')
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
            let length = parseInt(data[1].toString(2),2)-128
            
            
            console.log(data)

            console.log(length)

            

        }   

    });
}).listen({
    host: 'localhost',
    port: config.port
}, () => {
    console.log(`Se ha iniciado el servidor en el puerto ${config.port}`)
    // console.log(asciiArt.mensaje());
});