const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3030;

let users = [];
let chats = [];


app.use(express.static('public'));

app.get('/home', (req, res)=>res.sendFile('public/index.html' , { root : __dirname}));

server.listen(port,()=>console.log('Servidor corriendo en http://localhost:'+port));