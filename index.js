const express = require('express');
const app = express();

app.get('/hello', function(req, res){
    res.send("Hello world");
});

app.listen(3033, function (){
    console.log("Application is running on 3033");
});