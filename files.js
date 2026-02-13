const fetchData=new Promise((req,res)=>{
    const success=false;
    if(success){
        req("Data fetched");
        console.log("Data fetched")
    }else{
        res("Data not found");
        console.log("Data not found")
    }

}).catch(error=>{
    console.log("error");
})


// fetchData.catch(error=>{
//     console.log("error");
// })



login()
.then(getUsers)
.then(getUserName)
.then(console.log)
.catch((err)=>console.log(err));

function login() {
  return Promise.resolve({ id: 1 });
}

function getUsers(user) {
  return Promise.resolve({ id: 1, username: "admin" });
}

function getUserName(user) {
  return Promise.resolve(user.username);
}

login()
.then(getUsers)
.then(getUserName)
//.then(console.log)
//.catch((err) => console.log(err))
.then(console.log)
.catch((err) => console.log(err))


Promise.resolve(10)
.then((x)=>{
    x+10;
})

.then((x)=>{
    console.log("~x:",x);
    return x+20;
})

.then(console.log);

const fetchDatas=async()=>{
    console.log("started");
    await functionallity();
    console.log("ended");
}