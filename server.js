var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.set('views', './views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/hello', function(req, res){
	res.send('Hello World');
});

app.get('/hello', function(req, res){
	res.send('Hello World');
});

app.get('/', function(req, res){
	res.render('index', { title: "Hey", inputVal: "Hello there!"});
});

app.post('/posty', function(req, res){
	res.render('index', { title: req.body.myInput, inputVal: "Hello there!"});
});



var server = app.listen(3000, function() {
	console.log('running')
})
