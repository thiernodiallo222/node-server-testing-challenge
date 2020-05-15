const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.json(`Welcome to my awesome database of project !`)
})

module.exports = server;