// Hay que modificar este socket por el siguiente: 
//var wsUri = "ws://localhost:3030";

var wsUri = "wss://echo.websocket.org";

var output = document.getElementById("output");
var notificador = document.getElementById("notificador");

function init() {
    testWebSocket();
}

function testWebSocket() {
    websocket = new WebSocket(wsUri);
    websocket.addEventListener("open", (event) => {
        notificador.style.background = "#3498db";
        output.innerHTML = "<span style='color:#3498db'>Conectado</span>";
    });
    websocket.addEventListener("message", (event) => {
        output.innerHTML += "<span style='color:#e74c3c'>Error Conexión</span>";
        notificador.style.background = "#e74c3c";
    });
    websocket.addEventListener("error", (event) => {
        output.innerHTML += '<span>Error conexión</span>';
        notificador.style.background = '#e74c3c';
    });
    websocket.addEventListener("close", (event) => {
        output.innerHTML = "<br><hr><span style='color: #f1c40f'>Conexión cerrada</span>"
    });
}

window.addEventListener("load", init, false);