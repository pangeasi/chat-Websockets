const net = require("net");
const crypto = require("crypto");

const Handshake = (data) => {
    const key = data.toString().split("\r\n").find(e => e.includes("Sec-WebSocket-Key")).split(": ")[1];
    const keyCipher = crypto.createHash('sha1').update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`).digest('base64');
    const header = "HTTP/1.1 101 Web Switching Protocols\r\n" +
        "Upgrade: websocket\r\n" +
        "Connection: Upgrade\r\n" +
        "Sec-WebSocket-Accept:" + keyCipher + "\r\n\r\n";
    return header;
};

net.createServer((socket) => {
    socket.on("data", (data) => {
        // Guardar la dirección como usuario existente
        console.log(socket.address());
        // comprobar si es un nuevo usuario y dejarlo pasar
        // cuando se complete el handshake registrar el usuario.       
        socket.write(Handshake(data));
        test++;

    });
}).listen({
    host: "localhost",
    port: 3030
}, () => console.log("Se ha iniciado el servidor en el puerto 3030"));