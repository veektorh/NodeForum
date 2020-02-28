var express = require('express');
var app = express();
var setup = require('./utitlities/setup');

setup.initialize(app);

app.get('/', (req,res)=>{
    res.json({Hello : "world"})
})

var port = process.env.PORT;
app.listen(port, function () {
    console.log(`server is running on port ${port}` )
});