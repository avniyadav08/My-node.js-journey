//URL
//https:// -> Protocol
//glauniversity.in -> Domain
// UploadAttendance.aspx -> Path parm
// paccess_key = MjAyNi0wMi0xNw==&param2 = value2 -> Query param
// #key -> Hash

// const[, , functionName, value1 ,value2] = process.argv;

// //connst functionName = process.agrv[2];
// console.log("functionNme:" , functionName);
// //const value1 = process.argv[3]
// console.log("value1:" , value1);
// //const value2 = process.argv[4];
// console.log("value2:" ,value2);

// if(functionName === "add"){
//     console.log("add ", number(value1) + Number(value2));
// }
// if(functionName === "multi"){
//     console.log("add :" , value1 * value2);
// }

const http=require("http");
const server=http.createServer((request,response)=>{
    console.log("~request:",request)
    response.end("Home Page");
});

server.listen(3000);