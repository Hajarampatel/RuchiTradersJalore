
const ejs = require("ejs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get("/", function(req, res){
   res.render( __dirname + "/index.ejs");
});


app.post("/", function(req, res){
  res.render( __dirname + "/contact.ejs");
});

app.get("/contact", function(req, res){
  res.render( __dirname + "contact.ejs");
})


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
