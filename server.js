const express = require('express');
console.log("express instalado \o/")

const server = express();

server.all('/', (req, res)=>{
    res.send('Estou operante!')
})

function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}

module.exports = keepAlive;
