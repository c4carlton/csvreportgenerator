// Express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, 'server.js')));

app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

