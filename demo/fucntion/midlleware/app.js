const express=require (express)

const app=express()

const customMidlleware=(req,res,mext){
    if(req.query.skip=="true"){
        next();

    }else res.send("Not authorized")

};

app.use(customMiddleware);

app.use(express.json());

app.get("/home",(req,res)=>{
    res.send("Home page");
});

const userRoutes=require('')

