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
  socket.on("join-room", (callId) => {
   
    socket.join(callId);
    console.log(`Client joined call: ${callId}`)
    ;
  });

  // socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
    console.log("Client disconnected");
  });

  socket.on("callPeer", (data) => {
    io.to(data.userToCall).emit("callPeer", {
      signal: data.signalData,
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

