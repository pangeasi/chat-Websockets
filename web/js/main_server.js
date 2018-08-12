// Hay que modificar este socket por el siguiente: 
let wsUri = "ws://localhost:3030";

//let wsUri = "wss://echo.websocket.org";

let output = document.getElementById("output");
let notificador = document.getElementById("notificador");

function init() {
    testWebSocket();
}

function testWebSocket() {
    websocket = new WebSocket(wsUri);
    websocket.addEventListener("open", (event) => {
        notificador.style.background = "#3498db";
        output.innerHTML = "<span style='color:#3498db'>Conectado y se ha enviado el mensaje</span>";
        
        // Se envía el mensaje para tarea2

        // ERROR: Esto dará un error de protocolo ya que el mensaje no está enmascarado
        // TODO - Crear MASK
        websocket.send("Hola que tal, felicidades");

    });
    websocket.addEventListener("message", (event) => {
        // Esto posiblemente no sea un mensaje de error, puede significar otro tipo de mensaje.
        output.innerHTML += "<span style='color:#e74c3c'>Error Conexión</span>";
        notificador.style.background = "#e74c3c";
        console.log(event);
    });
    websocket.addEventListener("error", (event) => {
        // Esto es el error de conexión
        output.innerHTML += '<span>Error conexión</span>';
        notificador.style.background = '#e74c3c';
    });
    websocket.addEventListener("close", (event) => {
        output.innerHTML = "<br><hr><span style='color: #f1c40f'>Conexión cerrada</span>"
    });
}

window.addEventListener("load", init, false);