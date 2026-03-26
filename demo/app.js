//--------revrese a string----------
// function reverseString(str){
//   return str.split('').reverse().join('');
// }

// console.log(reverseString("Avni"));


//-----read file using node.js------
// const fs=require('fs');
// fs.readFile('data.txt','utf8',(err,data)=>{
//   if(err){
//     console.log('Error:',err);
//     return;
//   }
//   console.log("File Content",data);
// })


//create server
// const http=require('http');

// const server=http.createServer((req,res)=>{
//   res.write("Helllo Avni");
//   res.end();
// });

// server.listen(3000,()=>{
//   console.log("Server running on port 3000");
// })


//-------Promise-------
// function fetchData(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("DAta recevide");
//     },2000);
//   });
// }

// fetchData()
//   .then(data=>console.log(data))
//   .catch(err=>console.log(err));


// const file=require('file');
// file.readFile("data.txt",'utf8',(err,data)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// const http= require('http');

// const server=http.createServer((resolve,reject)=>{
//   resolve.write("Create Server");
//   resolve.end();
// })

// server.listen(3000,()=>{
//   console.log("server runing on port on 3000");
// })


//program using async/await

// function getData(){
//   return new Promise((resolve)=>{
//     setTimeout(() => {
//       resolve("data Loaded");
//     }, 2000);
//   })
// }

// async function main(){
//   const data=await getData();
//   console.log(data);
// }
// main();



// const http=require('http');

// const server=http.createServer((req,res)=>{

//   if(req.url==='/'){
//     res.writeHead(200,{'Content-type':"text/plain"});
//     res.end("Welcome to web Technology Server");
//   }

//   else if(req.url==="/about"){
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("About Page");
//   }

//   else{
//     res.writeHead(404);
//     res.end("Page Not Found");
//   }

// });

// server.listen(3000,()=>{
//   console.log("Server running on port 3000");
// })




const http=require("http");

function findSquare(num){
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(num*num);
    },2000);
  })
}

const server=http.createServer(async(req,res)=>{
  if(req.url==="/square"){
    try{
      let result=await findSquare(5);
      res.end("Square is"+result);
    }
    catch(err){
      res.end("error");
    }
  }

  else{
    res.end("Home page");
  }
});

server.listen(4000,()=>{
  console.log("chal gya maro mat");
});