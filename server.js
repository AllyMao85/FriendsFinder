var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlroutes = require("/Users/luqiangmao/FriendsFinder/app/routing/htmlRoutes.js");

//var apiroutes = require("/Users/luqiangmao/FriendsFinder/app/routing/apiRoutes.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3002;
//var PORT = process.env.PORT || 3000
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/",htmlroutes);

//app.use("/api/friends",apiroutes);

var fs=require('fs');
var friends=fs.readFileSync('/Users/luqiangmao/FriendsFinder/app/data/friends.js', 'utf8');

app.get("/api/friends", function(req, res) {
    res.send(friends);
    console.log(friends[1]);
    //console.log("connected");
    //res.json(friends);
});
  
app.post("/api/friends", function(req, res) {
    
    var newfriend = req.body;
    friends.push(newfriend);  
    res.json(friends);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


