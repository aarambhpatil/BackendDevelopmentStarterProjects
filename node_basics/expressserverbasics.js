const express = require('express')
const app = express()

// Middleware Node JS
app.use(function(req, res, next){
    next();
})

app.use(function(req, res, next){
    next();
})

// Routing to / from Node JS
app.get('/', function(req, res, next){
    res.send('Home');
    })

app.get('/profile', function(req, res){
    res.send('Profile');
})

app.get('/about', function(req, res){
    return next(new Error("Something went Wrong"))
})

// Error Handler for Node JS
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something Broke!')
})

app.listen(3000);