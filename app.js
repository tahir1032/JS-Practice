"use strict";
// import * as readline from 'readline';
Object.defineProperty(exports, "__esModule", { value: true });
// const rl = readline.createInterface(
// {
//     input: process.stdin,
//     output: process.stdout,
// });
// //     const user = rl.question( "please enter Name", function(answer)
// // {
// //     console.log( "Hello, " + answer );
// // })
// var user =
// {
//     firstName: rl.question("Enter First Name\n", function(answer)
// {
//     console.log ("Hello"+ " " +answer)
// }),
// };
// import * as readline from 'readline';
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// // Custom input function that mimics prompt/input behavior
// function input(question: string): Promise<string> {
//     return new Promise((resolve) => {
//         rl.question(question, (answer) => {
//             resolve(answer);
//         });
//     });
// }
// // Usage to get inputs
// async function getUserInput() {
//     const user = {
//         firstName: await input("Enter Name: "),
//         age: await input("Enter Age: "),
//     };
//     console.log(user.firstName + user.age);
//     rl.close(); // Close the readline interface after getting all inputs
// }
// getUserInput();
// import * as readline from 'readline';
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// const userObj= {
//     firstName: rl.question("First Name\n", function(answer){
//     console.log(`Thank you for your opinion! ${answer}`);
// rl.close();
// })
// }
// Assisgnment--------------------------
// import * as readline from "readline";
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// function input(question: string): Promise<string> {
//   return new Promise((resolve) => {
//     rl.question(question, (answer) => {
//       resolve(answer);
//     });
//   });
// }
// // Usage to get inputs
// async function userObject() {
//   type userObjType = {
//     firstName: string;
//     lastName: string;
//     className:string;
//     age: number;
//     friends: string[];
//     city: string;
//     street: string;
//     house: string;
//   };
//   const user = {
//     firstName: await input("Enter First Name: \n"),
//     lastName: await input("Enter Last Name: \n"),
//     className: await input("Enter Class Name: \n"),
//     age: parseInt(await input("Enter Age: \n")),
//     friends: (await input("Enter Friends Name: \n")).split(" ,"),
//     city: await input("Enter City Name: \n"),
//     street: await input("Enter Street No.: \n"),
//     house: await input("Enter House Number: \n"),
//   };
//   const newUser: userObjType[] = [user];
//   // console.log(typeof(user.friends), user.friends);
//   console.log(
//     "My First Name is " +user.firstName +user.lastName +" My age is " +user.age +". \n My class Name is" +user.className +
//       " My Friends are " +user.friends +" My Address is " +user.city +" " +user.street +" " +user.house +"."
//   );
//   rl.close();
// }
// userObject();
// ------------ Salary ------------------------------
// const salaryCalc = async()=>{
//   const salary = parseInt(await input("Monthly Enter Salary"));
//   const aDaySal = (salary/30); 
//   console.log("Per Day Salary " + aDaySal);
//   const aWeekSal = (salary/7);
//   console.log("Weekly Salary " + aWeekSal);
//   const workDays = parseInt(await input("Enter Days of Working "));
//   const totalSal = (aDaySal * workDays);
//   console.log("Total Working Days Salary "+ totalSal)
//   rl.close(); 
//   }
// console.log(salaryCalc());
// Factorial ------------------------------------------------------------
// let n = 5
// function factorial(n:number) : number{
//     if (n == 0 || n == 1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }
// console.log(factorial(n))
//--------------------------------
// Import prompt-sync
var prompt_sync_1 = require("prompt-sync");
// Create the prompt function
var prompt = (0, prompt_sync_1.default)();
// Use prompt to get user input
var newObject = {
    firstName: prompt("Enter your name: "),
    age: parseInt(prompt("Enter your age: "), 10), // Base 10 parsing
};
console.log("Hello ".concat(newObject.firstName, ". You are ").concat(newObject.age, " years old."));
