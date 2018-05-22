var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlroutes = require("../routing/htmlRoutes.js");
var apiroutes = require("../routing/apiRoutes.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3002;
//var PORT = process.env.PORT || 3000
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/",htmlroutes);

app.use("api/friends",apiroutes);


// Search for Specific Character (or all characters) - provides JSON
// app.get("/api/tables", function(req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(characters);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
