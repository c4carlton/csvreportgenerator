// Express app
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
// const http = require("http");
// var port = 3001

// app.set('port', 3001);
// app.use(express.static('../client/dist'));
// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/', function(req,res){
	var body = ''
  req.on('data', (chunk) => {
    body += chunk
  })
  req.on('end', function () {
    res.writeHead(200);
    console.log(typeof body)
    res.end(body);
  });
}) 

// app.get('/', function(req,res) {

// })

app.listen(3001)
console.log('Listening....')

