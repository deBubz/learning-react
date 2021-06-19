const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
    console.log(req.body);
    res.status(200).json({ token: 'token123' });
});

app.listen(4000, () => {
    console.log('server running');
});
