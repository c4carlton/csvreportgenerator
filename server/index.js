// Express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


// app.set('port', 3000);
app.use(express.static('../client/dist'));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'server')));

app.listen(3001, function () { console.log('CSVReportGen app listening on port 3000!') });
