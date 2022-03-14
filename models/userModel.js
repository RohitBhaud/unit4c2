const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname:{type:String , require:true},
    middlename:{type:String , require:false},
    lastname:{type:String , require:true},
    email:{type:String , require:true},
    age:{type:Number , require:true},
    address:{type:String , require:true},
    gender:{type:String , require:false,default:"female"},
    type:{type:String , require:false,default:"customer"},
},
{
    versionkey:false,
    timestamps:true,
})

module.exports= mongoose.model("user",userSchema)