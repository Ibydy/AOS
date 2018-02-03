var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', function (req, res) {
    res.send('12')
    }
)

app.post('/registration', function (req, res) {
    var j = jwt({secret: 'shhhhhhared-secret'});
    console.log(req.body)
    console.log(req.cookies)
    res.send();
})

module.exports = app;
