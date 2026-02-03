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

import fs from "fs";//built-in module

console.log("start");
const output=fs.readFileSync('file.txt',"utf8")
console.log("output",output);

fs.writeFileSync("file.txt","new content");

console.log("ended")