const express = require('express');
const mongoose = require('mongoose');
const app = express()
const User = require('./schema/user');
const body = require('body-parser')
const cors =require('cors');

const corsopt = {
    origin:'http://localhost:3000'
}

app.use(cors(corsopt));
app.use(express.urlencoded({extended:true}))
app.use(body.json());
// mongoose.connect('mongodb+srv://root:root@cluster0.aduvlfz.mongodb.net/?retryWrites=true&w=majority',
mongoose.connect('mongodb://0.0.0.0:27017/sample',
function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("connected");
    }
})

app.get('/user', async function(req,res){
    await User.find({}).then(function(user){
        res.send(user)
    })
    .catch((err) => {
        res.send(err)    
    })
})

app.post('/crtuser',async function(req,res){
    await User.create(req.body)
    .then(function(user){
        res.send(user)
    })
    .catch((err) => {
        res.send(err)    
    })
    console.log(req.body);
})

app.get('/user/:id',async function(req,res){
    await User.findById(req.params.id)
    .then(function(user){
        res.send(user)
    })
    .catch((err) => {
        res.send(err)    
    })
})

app.put('/updateuser/:id',async function(req,res){
    await User.findByIdAndUpdate(req.params.id,{
        Name:req.body.Name,
        password:req.body.password,
        conpass:req.body.conpass,
        // address:req.body.address
    })
    .then(function(user){
        res.send(user)
    })
    .catch((err) => {
        res.send(err)    
    })
})

app.delete('/deluser/:id',async function(req,res){
    await User.findByIdAndDelete(req.params.id)
    .then(function(){
        res.send("Profile Deleted");
        console.log("Deleted");
    })
    .catch((err) => {
        res.send(err)    
    })
})
app.listen(4900,()=>console.log("running"))


