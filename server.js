var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

var friends = [];

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'app/public')));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname+'/app/public', "home.html"));
});

app.get('/survey' , function(req, res){
    res.sendFile(path.join(__dirname+'/app/public', 'survey.html'));
});

app.post('/api/friends', function(req, res, next){
    friends.push(req.body);
    setTimeout(function(){res.redirect('/');}, (6*1000));
});

app.get('/api/friends', function(req, res){
    res.json(friends);
});

var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});