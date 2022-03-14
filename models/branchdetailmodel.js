const mongoose = require("mongoose")

const branchSchema = mongoose.Schema({
    name:{type:String , require:true},
    address:{type:String , require:true},
    IFSC:{type:String , require:true},
    MIRC:{type:Number , require:true}, 
},
{
    versionkey:false,
    timestamps:true,
})

module.exports= mongoose.model("BranchDetail",branchSchema)