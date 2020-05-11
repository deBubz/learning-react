const http = require("http");
const express = require("express");

// Create Express sercer
const app = express();
const port = process.env.PORT || 8082;

// create http serv
// const serv = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     res.end("hello\n")
// })

// serv.listen(port, hostname, () => {
//     console.log("running")
// })

app.listen(port, () => {
    console.log(`server running at ${port}`);
})