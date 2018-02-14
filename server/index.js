// Express app
var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
var path = require('path');
// const http = require("http");
// var port = 3001
// app.set('port', 3001);
// app.use(express.static('../client/dist'));
// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/', function(req,res){
	var body = '';
  req.on('data', (chunk) => {
    body += chunk
  });
  req.on('end', function() {
  	body = JSON.parse(body);
  	ConvertToCSV(body);
    res.writeHead(200);
      console.log(typeof body); //console log
      console.log(body);  //console.log
    res.end(JSON.stringify(body));
  });
});


function CSV(array) {
// Use first element to choose the keys and the order
    var keys = Object.keys(array[0]);

    // Build header
    var result = keys.join("\t") + "\n";

    // Add the rows
    array.forEach(function(obj){
        keys.forEach(function(k, ix){
            if (ix) result += "\t";
            result += obj[k];
        });
        result += "\n";
    });

    return result;
}

app.listen(3001)
console.log('Listening....')

