const mongoose =require('mongoose')

const user =mongoose.Schema({

    Name:{
        type:String,
        // required:true
    },
    password:{
       type:String,
        // required:true
    },
    conpass:{
        type:String,
        // required:true
    }

})
module.exports =mongoose.model("userschema",user);