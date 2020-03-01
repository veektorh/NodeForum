var express = require('express');
var app = express();
var setup = require('./utitlities/setup');
const models = require('./models/index')
setup.initialize(app);

app.get('/', (req,res)=>{
    models.User.findAll().then(a => console.log(a)).catch(e => console.log(e))
    res.json({Hello : "world"})
})

var port = process.env.PORT;
app.listen(port, function () {
    console.log(`server is running on port ${port}` )
});