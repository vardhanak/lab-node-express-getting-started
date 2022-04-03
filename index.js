//setup http server 

var http=require('http');
http.createServer((req,res)=>{
    res.write("this is http server");
    res.end();
}).listen(9000,()=>console.log("running on port 9000 "));

//setup express

const express=require('express')
const app=express()
app.get('/home',function(req,res){
    res.send('welcome page')
})
app.listen(9000,()=>console.log("server running on 9000"));