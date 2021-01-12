const express = require('express');
const app = express();
const setup = require('./utitlities/setup');
const error_middleware = require('./middlewares/error');
const user_routes = require('./routes/user');

setup.initialize(app);


app.use('/user', user_routes);

app.get('/', (req,res,next)=>{
    
    res.json({Hello : "world"})
});

error_middleware(app);


