// server.js
const express = require('express');
const app = express();
const PORT = 8000;


const server = app.listen(PORT, () =>
  console.log(`The server is all fired up on port ${PORT}`)
);
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });

const history = [];

io.on("connection", socket => {
  
  console.log(`A user connected with socket id: ${socket.id}`)

  io.emit("chat-history", history);
  console.log(history)

  socket.on("new_message_from_server", msg => {
    history.unshift(msg);
    io.emit("new_message_from_server", msg);
  });


});

