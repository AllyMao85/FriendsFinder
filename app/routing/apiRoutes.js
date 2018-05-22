var express = require("express");
var router = express.Router();
//var app = express();
var fs=require('fs');
var friends=fs.readFileSync('/Users/luqiangmao/FriendsFinder/app/data/friends.js', 'utf8');


console.log(friends);
// console.log(JSON.parse(friends));

// Routes
// =============================================================

router.get("/api/friends", function(req, res) {
    res.send(friends);
    console.log("connected");
    // res.json(friends);
});
  
router.post("/api/friends", function(req, res) {
    
    var newfriend = req.body;
    friends.push(newfriend);  
    res.json(friends);
});



module.exports = router;