var express = require("express");
var app=express();

//跨域问题(cors)
app.use("*", function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	next();
});
app.use(express.static("../img"));

app.use("*", function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "content-type");
	next();
});


app.get("/",(req,res)=>{
    res.send("这是后台");
});

app.get("/getData",(req,res)=>{
    res.sendFile(__dirname+"/data/data.json");
})

app.get("/getDataTwo",(req,res)=>{
    res.sendFile(__dirname+"/data/dataTwo.json");
})

app.listen(81,()=>{
    console.log("http://127.0.0.1:81");
})