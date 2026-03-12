const express=require("express")

const app=express()

const userRoutes= require("./routed/userRoutes");

app.use("/",userRoutes);


// app.get('/',(req,res)=>{
//     res.send("server setup done");
// });

// app.get('/home',(req,res)=>{
//     res.send("Home page done");
// });

app.listen(3000,()=>{
    console.log('server running on port 3000')
})