const express=require("express");
const routes=express.Router()

const userController=require("../controller/userController")

router.get('/user',userController.getUsers)

router.get('/user/:id',userController.getUserById)

module.exports=routes