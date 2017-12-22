var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

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

app.post('/api/friends', function(req, res){
    friends.push(req.body);
    console.log(friends);
});

app.get('/api/friends', function(req, res){
    res.send(friends);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});