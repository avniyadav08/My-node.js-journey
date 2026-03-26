const express=require("express");
const routes=express.Router()

const userController=require("../../controller/userController")

router.get('/user',userController.getUsers)

router.get('/user/:id',userController.getUserById)

router
.route("/users")
.get(userController,getusers)
.post(userController,addUsers);

module.exports=routes ;