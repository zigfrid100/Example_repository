/**
 * Created by frederik on 03.02.17.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');


app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());



app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    console.log("Client requested: " + req.url.toString());
});

app.post('/', function(req, res){
    console.log('POST /');
    console.log('Order placed:');
    JSON.parse(req.body);
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('ok');
});

app.listen(3000);
console.log("Server started and listening on port 3000");