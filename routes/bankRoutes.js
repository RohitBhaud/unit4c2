const express = require("express")
const BranchDetail = require("../models/branchdetailmodel")
const MasterAccount =require("../models/mastermodel")
const FixedAccount =require("../models/fixedaccountmodel")

const router = express.Router()

router.post("/createBranch", async(req,res)=>{
       try {
           const createdBranch = await BranchDetail.create(req.body); 
           return res.status(201).send(createdBranch)
        } 
        catch (error) {
            console.log(error)
        }

})

router.get("/getBranch", async(req,res)=>{
    try {
        const getBranch = await BranchDetail.find().lean().exec(); 
        return res.status(200).send(getBranch)
     } 
     catch (error) {
         console.log(error)
     }

})

router.post("/masterAccount", async(req,res)=>{
    try {
        const createdaccount = await MasterAccount.create(req.body); 
        return res.status(200).send(getBranch)
     } 
     catch (error) {
         console.log(error)
     }

})


router.get("/masterAccount", async(req,res)=>{
    try {
        const masterAccount = await MasterAccount.find().lean().exec(); 
        return res.status(200).send(masterAccount)
     } 
     catch (error) {
         console.log(error)
     }

})


router.post("/fixedAccount", async(req,res)=>{
    try {
        const createdaccount = await FixedAccount.create(req.body); 
        return res.status(200).send(getBranch)
     } 
     catch (error) {
         console.log(error)
     }

})

router.delete("/fixedAccount/:id", async(req,res)=>{
    try {
        const fixedAccount = await FixedAccount.findByIdAndDelete(req.params.id).lean().exec()
        const master = await MasterAccount.findByIdAndUpdate(req.body.master_id ,{$inc:{balance:-req.body.balance}},{new:true})


        //calculate interest from start date till current date.
        const currentDate = new Date();
        const diffTime =Math.abs(currentDate- fixedAccount.startDate) 
        const diffDays =Math.ceil(diffTime/(24*60*60*1000))
        const interestEarned =math.floor(diffDays*fixedAccount.interestRate*fixedAccount.balance/36500)

        //calcuate penalty 2%
        let  penalty = 0; 
        
        if(currentDate<fixedAccount.maturityDate){
           
            const diffTime2=Math.abs(fixedAccount.maturityDate- currentDate) 
            const diffDays2 =Math.ceil(diffTime2/(24*60*60*1000))
            const penalty = Math.floor((fixedAccount.balance*diffDays2*2)/36500)
        }
       
        const totalInterest = interestEarned-penalty 
        
        const totalAmount = totalInterest+fixedAccount.balance

        const response = {
            finalamount:totalAmount
        }
        return res.json(response)
     } 
     catch (error) {
         console.log(error)
     }

})
module.exports = router