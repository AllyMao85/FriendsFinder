var express = require("express");
var router = express.Router();
//var app = express();
var fs=require('fs');
var friends=fs.readFileSync('../data/friends.js', 'utf8');

//var friendlist = JSON.parse(data);
console.log(friends);


// Routes
// =============================================================

router.get("/api/friends", function(req, res) {
    
    res.json(friends);
});
  
router.post("/api/friends", function(req, res) {
    
    var newfriend = req.body;
    friends.push(newfriend);  
    res.json(friends);
});



module.exports = router;