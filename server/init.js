const net = require("net");
const crypto = require("crypto");

const getKey = (data) => {
    const key = data.toString().split("\r\n").find(e => e.includes("Sec-WebSocket-Key")).split(": ")[1];
    const base64 = crypto.createHash('sha1').update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`).digest('base64');
    return base64;
};

net.createServer((socket) => {
    socket.on("data", (data) => {
        const key = getKey(data);
        const header = "HTTP/1.1 101 Web Socket Protocol Handshake\r\n" +
            "Upgrade: websocket\r\n" +
            "Connection: Upgrade\r\n" +
            "WebSocket-Origin: http://localhost\r\n" +
            "WebSocket-Location: ws://localhost:9090\r\n"+
            "Sec-WebSocket-Accept:" + key + "\r\n\r\n";
        console.log(header);
        socket.write(header);
    })
}).listen({
        host: "localhost",
        port: 3030
    }, () => console.log("Se ha iniciado el servidor en el puerto 3030"));