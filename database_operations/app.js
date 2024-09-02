const express = require('express');
app = express();
const userModel = require('./usermodel');

app.get('/', function(req, res){
    res.send("Hey");
})

app.get('/create', async function(req, res){
    let createdUser = await userModel.create({
        name: "Aarambh",
        email: "aarambh.patil.8703@gmail.com",
        username: "aarambh"
    })
    res.send(createdUser);
})

app.get('/read', async function(req, res){
    let users = await userModel.find();
    res.send(users);
})

app.get('/update', async function(req, res){
    let updatedUser = await userModel.findOneAndUpdate({username: "aarambh"}, {name: "Aarambh Patil"}, {new:true})
    res.send(updatedUser);
})

app.get('/delete', async function(req, res){
    let users = await userModel.findOneAndDelete({username:"aarambh"});
    res.send(users);
})

app.listen(3000);
