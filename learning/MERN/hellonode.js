const http = require("http");
const hostname = '127.0.0.1';   // local host
const port = 8080;

// create http serv
const serv = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end("hello\n")
})

serv.listen(port, hostname, () => {
    console.log("running")
})