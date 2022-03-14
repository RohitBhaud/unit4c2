const express = require("express");
const connectDB =require("./db")
const userRoutes = require("./routes/userRoutes")
const bankRoutes = require("./routes/bankRoutes")

const app = express();
app.use(express.json())

app.use("/user",userRoutes)

app.use("/bank",bankRoutes)

app.listen(3456,async()=>{
 try {
    await connectDB()
   console.log("listening on 3456")

 } 
 catch (error) {
    console.log(error)
 }
})