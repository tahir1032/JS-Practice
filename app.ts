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

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Custom input function that mimics prompt/input behavior
function input(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Usage to get inputs
async function userObject() {
    const user = {
        firstName: await input("Enter First Name: \n"),
        lastName:  await input("Enter Last Name: \n"),
        className: await input("Enter Class Name: \n"),
        age: await input("Enter Age: \n"),
        friends: (await input("Enter Friends Name: \n")).split(" ,"),
        city: await input("Enter City Name: \n"),
        street: await input("Enter Street No.: \n"),
        house: await input("Enter House Number: \n"),

    };

    console.log("My First Name is " + user.firstName + user.lastName + " My age is " + user.age + ". \n My class Name is" + 
        user.className + " My Friends are " + user.friends + " My Address is " 
        + user.city + " " + user.street + " "+ user. house+ ".");
    rl.close(); // Close the readline interface after getting all inputs
}

userObject();
