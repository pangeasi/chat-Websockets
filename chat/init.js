const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3030;

let users = [];
let chats = [];


app.use(express.static('public'));

app.get('/home', (req, res)=>res.sendFile('public/index.html' , { root : __dirname}));

/*    sockets    */
io.on('connection', function(socket){
  socket.on('new user', function(data){
    users.push({name:data.name,pass:data.pass});
    io.emit('getUsers', users);
    io.emit('getMensajes', chats);
  });
  socket.on('nuevo', function(data){
    chats.push({name:data.name,msj:data.msj});
    io.emit('add', chats[chats.length-1]);
  });
});

server.listen(port,()=>console.log('Servidor corriendo en http://localhost:'+port));