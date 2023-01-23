// server.js
const express = require('express');
const app = express();

const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);

// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
  // NOTE: Each client that connects gets their own socket id!
  console.log(socket.id, '\n', 
  "Nice to meet you. (Shake Hand)");
  // socket.emit will emit directly to 'this' specific client
  socket.emit("message", `Socket.io is up and running! Your socket ID is: ${socket.id}`);
});


