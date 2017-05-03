const express=require('express');
const app=express();
const path=require('path');

app.use(express.static(path.resolve(__dirname,'www')));

var viewsDir=__dirname+'/www/views/';
app.get('/',function(req,res){
    res.sendFile(viewsDir+'index.html');
});
app.get('/to',function(req,res){
    res.sendFile(viewsDir+'to.html');
})

app.listen(8080);
process.on('uncaughtException',function(exception){
    console.log(error);
});