// server.js
import express from 'express';
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
  console.log(socket.id);

  socket.on("event_from_client", data => {
    // socket.broadcast will emit to all other clients beside the
    // client who is actually emitting
    socket.broadcast.emit("send_data_to_all_other_clients", data);
  });
});


