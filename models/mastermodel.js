const mongoose = require("mongoose")

const masterSchema = mongoose.Schema({
     balance:{type:Number , require:true},
    user_id:{type:mongoose.Schema.Types.ObjectId , ref:"user"}, 
    manager_id:{type:mongoose.Schema.Types.ObjectId , ref:"user"},
    branch_id:{type:mongoose.Schema.Types.ObjectId , ref:"BranchDetail"}, 
},
{
    versionkey:false,
    timestamps:true,
})

module.exports= mongoose.model("masteraccount",masterSchema)