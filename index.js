const express=require("express")
const app=express();
const api=require("./foodAPi/api")
const resturant=require("./foodAPi/resturant")
const link=require("./foodAPi/link")
const cors=require("cors")


app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).json({api,resturant,link})
    
})
// app.get("/",(req,res)=>{
//     res.send("hello")
// })
app.listen(5000,(req,res)=>{
    console.log("server is running")
    

})