const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// serve html
app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/vending/index.html');
});

app.listen(PORT, () => {
    console.log(`> serving at localhost:${PORT}`);
});
