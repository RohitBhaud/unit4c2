const mongoose = require("mongoose")
const connectDB = async()=>{
   try {
       const conn = await mongoose.connect("mongodb+srv://rohit:rohit@cluster0.vm5rc.mongodb.net/mydata?retryWrites=true&w=majority")
       console.log(`connected at ${conn.connection.host}`)
   } 
   catch (error) {
       console.log(error)
   }
}

module.exports = connectDB