const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");
const app = express();

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  },
});

// io.on("connection", (socket) => {
//   socket.on("join-room", (room) => {
//     socket.join(room);
//     console.log(`Client joined room: ${room}`);
//   });

//   socket.on("text-update", (data) => {
//     // Broadcast the received update to all connected clients
//     io.to(data.room).emit("text-update", data.newValue);
//     console.log(data);
//   });

//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//   });
// });

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id)
  socket.on("join-room", (roomId) => {
    io.to(roomId).emit("user:joined", {roomId, id:socket.id });
    socket.join(roomId);
    io.to(socket.id).emit("join-room", roomId)
    console.log(`Client joined room: ${roomId}`)

    ;
  });

  // socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
    console.log("Client disconnected");
  });
 
  socket.on("call-Peer", ({to, offer}) => {
    io.to(to).emit("callPeer", {
      signal: offer,
      from: data.from,
    });
    console.log(data.userToCall);
    console.log(data.signalData);
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);

    console.log(`Call accepted: ${data.signal}`);
  });
});

server.listen(3001, () => {
  console.log("WebSocket server is running on port 3001");
});

