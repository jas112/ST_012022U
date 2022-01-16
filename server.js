var bodyParser = require('body-parser');
var path = require('path');

var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render('index');
})
app.get('/altair_5', function(req, res) {
 res.render('altair_5');
})
app.get('/altair_6', function(req, res) {
 res.render('altair_6');
})
app.get('/altair_7', function(req, res) {
 res.render('altair_7');
})

app.listen(8000, function() {
 console.log('listening on port 8000');
})

module.exports = app;