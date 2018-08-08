// En el core se agregarán cosas útiles como la librearía de handshake y el mask y unmask, cosas necesarias de la lógica del chat.
const crypto = require("crypto");

/**
 * 
 * @author RE2
 * @param {buffer} data 
 * @description Nos ayuda a hacer el handshake, esta funcion recibe el buffer y hace todo lo necesario para obtener el handshake
 */
const Handshake = (data) => {
    const key = data.toString().split("\r\n").find(e => e.includes("Sec-WebSocket-Key")).split(": ")[1];
    const keyCipher = crypto.createHash('sha1').update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`).digest('base64');
    const header = "HTTP/1.1 101 Web Switching Protocols\r\n" +
        "Upgrade: websocket\r\n" +
        "Connection: Upgrade\r\n" +
        "Sec-WebSocket-Accept:" + keyCipher + "\r\n\r\n";
    return header;
};

module.exports = {
    Handshake: Handshake
}
