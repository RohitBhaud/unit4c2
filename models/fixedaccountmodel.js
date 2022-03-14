const mongoose = require("mongoose")

const fixedAccountSchema = mongoose.Schema({
    account_number:{type:Number, require:true,unique:true},
     balance:{type:Number , require:true},
     interestRate:{type:Number , require:true},
     startDate:{type:Date, require:true},
     maturityDate:{type: Date, require:true},
     master_id:{type:mongoose.Schema.Types.ObjectId , ref:"MasterAccount"}



    // user_id:{type:mongoose.Schema.Types.ObjectId , ref:"user"}, 
    // manager_id:{type:mongoose.Schema.Types.ObjectId , ref:"user"},
    // branch_id:{type:mongoose.Schema.Types.ObjectId , ref:"BranchDetail"}, 
},
{
    versionkey:false,
    timestamps:true,
})

module.exports= mongoose.model("FixedAccount",fixedAccountSchema)