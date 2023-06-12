const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on('message', (message) => {
        console.log('Received signaling message:', message);
    });

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

app.get("/", (req, res) => {
    res.send('Server is running.')
})

const port = 3000;
http.listen(port, () => {
    console.log(`Signaling server listening on port ${port}`);
});