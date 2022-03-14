const express = require("express")
const User = require("../models/userModel")
const router = express.Router()

router.post("", async(req,res)=>{
    try {
       const createUser = await User.create(req.body); 
       return res.status(201).send(createUser)
    } 
    catch (error) {
        
    }
})

router.get("", async(req,res)=>{
    try {
       const user = await User.find().lean().exec() ;
       return res.status(200).send(user)
    } 
    catch (error) {
        
    }
})
module.exports = router