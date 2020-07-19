const express = require("express");
const app = express();

var faker = require('faker');
var randomName = faker.name.findName();
var randomText = faker.lorem.paragraphs();

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes 
//faker routes
app.get("/faker", function(req, res){
 
 res.render("faker.ejs", {"randomName":faker.name.findName(), 
 "randomText":faker.lorem.paragraphs(), "randomSource":"• Source: \n"}
 );
 
 });

//page routes
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
  
