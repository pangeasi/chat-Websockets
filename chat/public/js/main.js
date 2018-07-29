const socket = io.connect('http://localhost:3030', { 'forceNew': true });
let user = {name:'',pass:''};
function init() {
    testWebSocket();
}


const escribiendo = ()=>socket.emit('escribiendo', user.name);





















window.addEventListener("load", init, false);