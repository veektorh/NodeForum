const express = require('express');
const app = express();
const setup = require('./utitlities/setup');
const error_middleware = require('./middlewares/error');
const user_routes = require('./routes/user');

setup.initialize(app);

app.use('/user', user_routes);

app.get('/', (req,res,next)=>{
    
    throw new Error("an rrorr occured");
    
    // models.Users.findAll().then(a => console.log(a)).catch(e => console.log(e))
    // res.json({Hello : "world"})
});

error_middleware(app);


