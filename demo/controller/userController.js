// const user=require("../modules/userModules")

// export const getUser=(req,res)=>{
//     // res.json();
//     const clientquery=req.query;
//     console.log("ClientQuery:",clientQuery)
//     res.json(users);

// };

// exports .addUser=(req,res)=>{
//     console.log("req",req.body); 
//     res.json(req.body);
// };

// exports.getUserById=(req,res)=>{
//     const userId=req.params.id;
//     const user={};

//     user.map((userDetails)=>{
//         id=userDetails("id");
//         if(id==uerId){
//             user=userDetails;
//         }
//     })
// }
// // module.exports=getUser;




exports.getUserById=(req,res)=>{
    const userId=req.params.id;
    const name=req.query.name;
    const header=req.headers;
    console.log("header",header);
    console.log("name",name);
    console.log("userId",userId);
    let user={};

    user.apps((objectFronList,i)=>{
        console.log("i",i);
        const id=objectFromList.id;

        if(id==userId){
            user=objectFromList;
        }
    }); 
}


res.status(200).json({
    user:user,
    name,
});

res.send("sdfghjk")
res.status()
res.redirect('get/user');


// GET /get/products
// GET /get/products/:id
// POST /add/products
// DELETE /get/products/:id


  

