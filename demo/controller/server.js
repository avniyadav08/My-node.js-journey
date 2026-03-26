// const express=require("express")

// const app=express()

// const userRoutes= require("./routed/userRoutes");

// app.use("/",userRoutes);


// // app.get('/',(req,res)=>{
// //     res.send("server setup done");
// // });

// // app.get('/home',(req,res)=>{
// //     res.send("Home page done");
// // });

// app.listen(3000,()=>{
//     console.log('server running on port 3000')
// })


// const app=require("./app");

// const port=require("dotenv").config();

// app.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });

const app=require("./app");

require("dotenv").config({
    path:".env"
});

const port=process.env.port;
console.log("Port",port);


const jwtToken=process.env.jwtToken;
console.log("jwtToken",jwtToken);

app.listen(3000,()=>{
    console.log("server runnig at 3000");
})