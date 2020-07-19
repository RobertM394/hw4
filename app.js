const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes 
app.get("/", function(req, res){
 
 res.render("index.html");
 });
 
app.get("/blackhat", function(req, res){
 
 res.render("blackhat.html");
 });
 
 app.get("/hackers", function(req, res){
 
 res.render("hackers.html");
 });
 
 app.get("/index", function(req, res){
 
 res.render("index.html");
 });
 
app.get("/whitehat", function(req, res){
 
 res.render("whitehat.html");
 });
 
 app.get("/sources", function(req, res){
 
 res.render("sources.html");
 });
 

 //start server
 app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Express server is running...");
  });
  
