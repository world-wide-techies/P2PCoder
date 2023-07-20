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

const rooms = {};

io.on("connection", (socket) => {
  socket.on("join room", (roomID) => {
    if (rooms[roomID]) {
      rooms[roomID].push(socket.id);
    } else {
      rooms[roomID] = [socket.id];
    }
    const otherUser = rooms[roomID].find((id) => id !== socket.id);
    if (otherUser) {
      socket.emit("other user", otherUser);
      socket.to(otherUser).emit("user joined", socket.id);
    }
  });
});

server.listen(3001, () => {
  console.log("WebSocket server is running on port 3001");
});
