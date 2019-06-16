const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
app.use(bodyParser.json());
app.listen(port);
// para poder rodar : va na aba Terminal >> new Terminal >> Enter 1 vez >> npm install >> node ./routes/server.js
// para testar coloca no navegador http://localhost:3000/salvaNovoUsuario
// para parar o programa Ctrl+C
app.post('/salvaNovoUsuario', function(req, res) {
    res.json('Recebi esses valores: ' + req.body);
})
console.log('Message RESTful API server started on: ' + port);