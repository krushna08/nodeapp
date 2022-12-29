var express =require("express")
var app=express();
var path=require("path");

app.use(express.static(path.join(__dirname,'public')));

app.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname,'./index.html'));
})

app.get("/home",function(req,resp){
    console.log("Calling Rest API");
    var person={firstname:"Krushna",Lastname:"Bairagi",age:"24"}
    resp.send(person);
})

app.listen(8082);
console.log("Server Running at port 8082");
