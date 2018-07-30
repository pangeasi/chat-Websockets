const socket = io.connect('http://localhost:3030', { 'forceNew': true });
const userName = document.getElementById('nombre');
const userPass = document.getElementById('pass');
const acceder = document.getElementById('btn-acceder');
const uconectados = document.getElementById('uconectados');
const ucuenta = document.getElementById('cuenta');
const enviar = document.getElementById('enviar');
const textoMensaje = document.getElementById('msj-text');
const mensajes = document.getElementById('mensajes');
const msjInit = document.getElementsByTagName('label')[0];

acceder.addEventListener('click',()=>{
	socket.emit('new user', {name:userName.value,pass:userPass.value});
	ucuenta.innerHTML = `<br><h1>${userName.value}</h1>`;
	msjInit.innerHTML = 'inicio del chat';
});
enviar.addEventListener('click',()=>{
	socket.emit('nuevo', {name:userName.value,msj:textoMensaje.value});
	textoMensaje.value = '';
});



socket.on('getUsers',(u)=>{
	let listaUsuarios = '<ul>';
	for(var i in u){
		if(u[i].name != userName.value)listaUsuarios+=`<li><span>${u[i].name}</span></li>`;
	}
	uconectados.innerHTML = listaUsuarios+'</ul>';
});

socket.on('add',(m)=>(m.name == userName.value)?mensajes.innerHTML +=`<div class="textChat me"><b>${m.name}</b><p>${m.msj}</p></div>`:mensajes.innerHTML+=`<div class="textChat"><b>${m.name}</b><p>${m.msj}</p></div>`);
socket.on('getMensajes',(m)=>{
	var dt = '';
	for(var i in m){
		(m[i].name == userName.value)?dt+=`<div class="textChat me"><b>${m[i].name}</b><p>${m[i].msj}</p></div>`:dt+=`<div class="textChat"><b>${m[i].name}</b><p>${m[i].msj}</p></div>`;
	}
	mensajes.innerHTML = dt;
});