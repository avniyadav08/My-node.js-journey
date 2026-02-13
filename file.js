// console.log("1");

// const getConsole = () => {
//     console.log("2");

//     setTimeout(() => {
//         console.log("3");
//     }, 2000);

//     setTimeout(() => {
//         console.log("3a");
//     }, 1000);
// };

// getConsole();

// for (let i = 0; i <= 5e9; i++) {}

// console.log("4");

// import multi, {add} from './utils.js';
// import {div} from "./fucntion/function.js";

// const add=require('add');

// console.log("add:",add(1,2));
// console.log('multi',multi(2,2));
// console.log('div',(9,3));

// import fs from "fs";//built-in module

// console.log("start");
// const output=fs.readFileSync('file.txt',"utf8")
// console.log("output",output);

// fs.writeFileSync("file.txt","new content");

// console.log("ended")

// const a =()=>{

//      setTimeout(()=>{
//         console.log("async function 1");
//     },1000);

//     setTimeout(()=>{
//         console.log("async function 2");
//     },0);
//     b();
//     console.log("~a ~ a:");
// };

// const b =()=>{
//     console.log("~b ~ b:");
//     c();
// };

// const c =()=>{
//         console.log("~c ~ c:");
// };
// a();

// const a = () => {
//     setTimeout(()=>{
//         console.log("asyn Function 2:");
//     },0);
//     console.log("~ b ~ b:");

//     Promise.resolve().then(()=>{
//         console.log("asyn Function 3:");
//     });

//     Promise.resolve().then(()=>{
//         console.log("asyn Function 4:");
//     });
// };

// a();
// const fetchData=(a,b,cb)=>{
//     cb( `${a+b} Data Initialized`);
// };

// const internalFunction=(data)=>{
//     console.log("data:",data);
// };
// fetchData(1,2,internalFunction);