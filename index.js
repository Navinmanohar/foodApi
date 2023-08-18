const express=require("express")
const app=express();
const api=require("./foodAPi/api")


app.get("/",(req,res)=>{
    res.send(api
        )
    // console.log(api)
})

app.listen(3000,(req,res)=>{
    console.log("server is running")
    // console.log(api)

})