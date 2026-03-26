const authMiddleware=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];

    if(!token){
        res.send("Token not available");
    }
    try{
        const decoded=JsonWebTokenError.verify(token,jwtToken);
        console.log("authmiddleware",decoded);
        req.user=decoded
        next();
    }catch(err){
        res.send("token not vallid")
    }
};

app.use(authMiddleware);