const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/data', (req, res) => {
    res.send('FeedLyse API está rodando!');

});

module.exports = app;