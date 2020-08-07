const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 8080;

app.get('/', (req, res) => {
    // res.send('<h1> Hey hey </h1>')
    res.sendFile(__dirname + '/index.html');
});

// socket io thing
io.on('connection', (socket) => {
    console.log('user connected');

    // socket.broadcast.emit('hi');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });

    // hmm look at broadcasting and emitting socket??
    // If you want to send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket:
    // io.on('connection', (socket) => {
    //     socket.broadcast.emit('hi');
    // })
});

http.listen(PORT, () => {
    console.log(`page running on http://localhost:${PORT}`);
});