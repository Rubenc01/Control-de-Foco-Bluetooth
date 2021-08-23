const express = require('express');
const {spawn} = require('child_process');

const app = express();

var route = express.Router();

route.get('/', function(req, res){
    res.send('Pagina root');
});


route.get('/on', function(req, res) { 
    res.send('¡Foco encendido!');
    const sensor = spawn('python', ['Conexion-Bluetooth.py']);
});


route.get('/off', function(req, res) { 
    res.send('!Foco Apagado!');
    const sensor = spawn('python', ['Conexion-off.py']);
});


app.use('/sens', route);

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('server on port 3000');
});
