// import * as readline from 'readline';

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

import { parse } from "path";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function input(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

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

// // Import prompt-sync
// import promptSync from "prompt-sync";

// // Create the prompt function
// const prompt = promptSync();


// // Use prompt to get user input
// let newObject = {
//   firstName: prompt("Enter your name: "),
//   age: parseInt(prompt("Enter your age: "), 10),  // Base 10 parsing
// };

// console.log(`Hello ${newObject.firstName}. You are ${newObject.age} years old.`);


//----------------------------------------------------------------------------------

// import * as readline from 'readline';

// type userObjType = {
//     firstName: string;
//     lastName: string;
//     className: string;
//     age: number;
//     friends: string;
//     city: string;
//     street: string;
//     house: string;
// };

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const newObject: userObjType = {
//     firstName: '',
//     lastName: '',
//     className: '',
//     age: 0,
//     friends: '',
//     city: '',
//     street: '',
//     house: '',
// };

// rl.question('Enter your name: ', (name) => {
//     newObject.firstName = name;

//     rl.question('Enter your age: ', (age) => {
//         newObject.age = parseInt(age, 10); // Use base 10 for parsing

//         rl.question('Enter your friends name: ', (friendName) => {
//           newObject.friends = friendName;

//         // Continue asking other questions if needed

//         // After all questions, print the result
//         console.log(`${newObject.firstName}, you are ${newObject.age} years old. and ${newObject.friends}`);

//         rl.close(); // Close the readline interface
//     });
// });
// });

// --------------------------------

// let arr: string[] = ['tahir','khurram', 'hamza', 'haider'];

// let arr1: string = arr.toString()

// console.log(arr1.toUpperCase());

let num:number[] = [1,4,9,16]

let num1:number[] = num.map(Math.sqrt)

console.log(num1)
