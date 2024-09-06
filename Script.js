// // Date and Time

// var today = new Date();
// console.log(today);


// var dd = today.getDate();
// if(dd<10)
//     {
//         dd=`0${dd}`;
//     }
// console.log(dd);

// var mm = today.getMonth() + 1;
// if(mm<10)
//     {
//         mm=`0${mm}`;
//     }
// console.log(mm);

// var yyyy = today.getFullYear();
// console.log(yyyy);

// // ----------------------

// var A = prompt(" Side 1");
// var B = prompt(" Side 2");
// var C = prompt(" Side 3");

// var aa = parseInt(A);
// var bb = parseInt(B);
// var cc =  parseInt(C);

// console.log(typeof(aa,bb,cc));

// var s = (aa+bb+cc)/2

// console.log(s);

// var area = (s*(s-aa)*(s-bb)*(s-cc));
//  console.log(`Area = ${area}`)

// ------------------------

// for ( var year =2014;  year <= 2050; year ++){
     
//     var d = new Date(year,0,1);

//     if(d.getDay()===0)
//     {
//         console.log(`New Year's Day ${year}`);
//     }
// }

//-----------------------------------

// var a = "This is a test entry"
// document.write(a)

// alert(document.URL);

// -----------------------------------

// const front_bacK=()=>
// {   
//     const str = prompt("String")
    
//     if(str.length>=3)
//     {
//         back = str.substring(str.length-3);

//         return back+ str + back;
//     }

// else
// {
//     return false;
// }
// }

// console.log(front_bacK());

// -----------------------------------

// let myContact=
// {
// name:"Tahir",
// age:25,
// city:"Islamabad",
// phone:"03123456789",
// email:"tahir@gmail.com",
// address:{
//     street:"Street 1",
//     house:"House 1",
//     city:"Islamabad",
//     country:"Pakistan",
//     },
// }

// myContact.school = "Govt High School";
// delete myContact.age;

// let findObj = prompt("Please Enter object you want to Find");
//  if (findObj in myContact)
//     {
//        return (myContact[findObj] + findObj);
//     }

//     else
//     {
//         alert("Object you are looking for not exist, or May be changed")
//     }

//     console.log(myContact.school);
// console.log(myContact);
// console.log("name" in myContact)

// Object.defineProperty(myContact.name)


// let a = document.getElementById("clickMe")
// let b = document.getElementById("myheading1")
// let c = document.getElementById("myheading2")

// console.log(a,b,c);

// function touchMe(){

// // b.innerText = c.innerText;
// b.innerText = b.innerText.replace(b.innerText, c.innerText);

// }


// function newObj()
// {
//     let person = {
//         name: "John",
//         age: 30,
//         phone:"03123456789",
//         email:"tahir@gmail.com",
//         address:{
//             street:"Street 1",
//             house:"House 1",
//             city:"Islamabad",
//             country:"Pakistan",
//             }
//     }

//     let x= person;
//      return (x.age + " " + person['address']['city']);
// }

// console.log(newObj());


// let person = {
//     name: "John",
//     age: 30,
//     phone:"03123456789",
//     email:"tahir@gmail.com",
//     address:{
//         street:"Street 1",
//         house:"House 1",
//         city:"Islamabad",
//         country:"Pakistan",
//         }
// }

// console.log(JSON.stringify(person))

// function Person(first, last, age, city, id){

//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.city = city;
//     this.id = id;
// }

// const newPerson = new Person("tahir", "Hafeez", 25, "FSD", 1)
// const oldPerson = new Person("tayyab", "Rafiq", 24, "LHR", 2)


// console.log(oldPerson.age, newPerson.age);

// let n = 5

// function factorial(n){


//     if (n == 0 || n == 1){
//         return 1;
//     }
//     if(n<0){return ("enter Positve Integer")}

//     return n*factorial(n-1);
// }

// console.log(factorial(n))

// const newArr = ['tahir', true, 1234]
// const newArr2 = newArr.slice(0,2)
// // newArr[1] = 1234;

// var today = new Date();
// var date = today.getDate()
// var month = today.getMonth()
// var year = today.getFullYear()
// var hours = today.getHours()
// var minutes = today.getMinutes()

// //this will change the value of array and object existing value of that index

// console.log(hours, minutes,date , month,year);

// let customers = [{
//     name: 'ABC Inc',
//     credit: 100
// }, {
//     name: 'ACME Corp',
//     credit: 200
// }, {
//     name: 'IoT AG',
//     credit: 300
// }];

// console.log(customers.find(c=> c.credit >= 100))

// var colors = ['red','green','blue','yellow','purple'];
// var rgb = colors.slice(0,3);
// console.log(colors, rgb); // ["red", "green", "blue"]

// let languages = ['C', 'C++', 'Java', 'JavaScript'];
// languages.splice(2, 3);

// console.log(languages)
  
// let cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'New York', population: 8175133},
//     {name: 'Chicago', population: 2695598},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
// ];

// // function findPopulation(e){
// //     let population = cities.filter(e => e.population < 2000000);
// //     console.log(population)
// // }

// // findPopulation()

// cities
//     console.log(cities.filter(city => city.population < 3000000))
//     // console.log(cities.sort((c1, c2) => c1.population - c2.population))
//     console.log(cities.sort((x,y)=>x.population - y.population))

//     const b = cities.map(city => (city.name + ' :  ' + city.population))

//     console.log(b.join(" \n"))


