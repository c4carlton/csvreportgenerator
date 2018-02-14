// Express app
var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
var path = require('path');
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/', function(req,res){
	var body = '';
  req.on('data', (chunk) => {
    body += chunk
  });
  req.on('end', function() {
  	body = JSON.parse(body);
  	CSV(body)
  	console.log(body, 'this is body')
    res.status(200).end(JSON.stringify(dog));
  });
});


var CSV = function(array) {
  var result = [];
  var traverse = function(obj) {
    result.push(csvMaker(obj))
    for (var j = 0; j < obj.children.length; j++) {
      traverse(obj.children[i])
    }
  }
  for (var k = 0; k < array.length; k++) {
    traverse(array[k]);
  }
 
  return result.join('\n');
}

var csvMaker = function (obj) {
  var result = [];
  var keys = Object.keys(obj)
  for (var key in obj) {
    if (key === 'children') {
      continue;
    }
    result.push(key + ' ' + obj[key])
  }
  return result.join(', ')
}

app.listen(3001)
console.log('Listening....')

