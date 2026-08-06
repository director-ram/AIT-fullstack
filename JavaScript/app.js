//  JavaScript practice

// variables

// var firstName = "Hema"  var used in older versions and its drawback is it can be re-declared and re-assign the value

// let lastName = "sai" let is a ES6 modules and it can be re-assigned but not re-declared

// const DOB = "14-08-2004" let is a ES6 modules and it can be re-assigned but not re-declared



// operators

// arithmetic operators
// +,-,*,/,%

// assignment operators
// =,+=,-=,*=,/=,%=

// comparison operators
// ==,===,!=,!==, <=, >=, <, >

// logical operators
// &&,||,!


// conditional statements

// if(condition){
// block of code
// }

// if the conditon is true the block of code executes.

// if(condition){
// block of code
// }else{ block of code}

//  if the condition fails and you want to execute the diff code then else block executes.

// if(condition){
// block of code
// }else if(condition){
// block of code
// }else{
// block of code
// }

// when you have more than one condition to check you can use if else if

// switch (variable/expression){
// case 1:
// block of code
// break
// case 2:
// block of code
// break
// case 3:
// block of code
// break
// default:
// block of code
// break
// }

// switch is used to check multiple conditions and execute the block of code based on the condition, mostly used in ATM pages


// loops
// for (initialization; condition; incre/decre){
// block of code
// }

//  for loop is used to run the block of code certain no.of times based on the condition.

// while (condition){
// block of code

// incre/decre
// }

//  while loop runs until the condition becomes false, mostly used in login pages

// do{
// block of code

// incre/decre
// }while(condition)

//  do while loop runs once and checks the condition and stops if it becomes false, mostly used in ATM pages


// const password = "Hemasai@123";

// let userPassword = "";

// let attempts = 0;

// const maxAttempts = 5;
// while (attempts < maxAttempts) {
//     userPassword = prompt("Enter password: ");

//     if (userPassword === password) {
//         console.log("login success");
//         break;
//     }
//     else {
//         console.log("invalid password");
//         console.log(`Remaining attempts: ${maxAttempts - attempts - 1}`);
//     }
//     attempts++;
// }

// if (attempts === maxAttempts) {
//     console.log("account locked!!");
// }



// for in
//  the loop is used on objects

// const car = {
//     "brand": "BMW",
//     "model": "M5",
//     "year": 2024
// }

// for (const key in car) {
//     console.log(key, car[key]);
// }

// // for of
// //  the loop is used on arrays
// const number = [1, 2, 3, 4, 5]

// for (const key of number) {
//     console.log(key);
// }



//  function
// function is a block of code that can be reusable and perform its task, we write once and call the function whenever we need it instead of writing the code again

// function declaration
// function message() {
//     console.log("hello world");
// }
// message();


// // function expression or anonymous function
// const display = function () {    //with out a name we can't call the function so we assign this anonymous function to varible
//     console.log("this is a function expression!!");
// }
// display();

// //  arrow function
// const greet = () => { //this is also a anonymos function and it is a shorter way of writing the function and assigned to a varible
//     console.log("Good morning!,This message was from arrow function");
// }
// greet();



// // IIFE (Immediately Invoked Function Expression) or self-invoking function
// // this function executes immediately after the function created.

// (function () {
//     console.log("this is a IIFE function ran immediately after declaration");
// })();


// IIFE with parameters
// ((user) => console.log(`hello ${user}`))("hemasai");

// // callback function
// //  callback function is a function that passed as a argument to another function that called after the task is completed.

// function function1() {
//     console.log("this is a callback function!!");
// }

// let callBack = (callback) => {
//     console.log("this is before callback");
//     callback();
//     console.log("this is after the callback");
// }

// callBack(function1);

// // function with the parameters
// // parameters are the values recvied to the function

// // and arguments are the values passed to function while calling it

// function sayHello(name) { // the variables inside () are called parameters
//     console.log("Hello " + name);
// }
// sayHello("Hemasai"); // the value inside () is called arguments

// const addNum = function (num1, num2) {
//     console.log(num1 + num2);
// }
// addNum(4, 100);

// const subNum = (num1, num2) => {
//     console.log(num1 - num2);
// }
// subNum(10, 4);



// // function with return statements
// //  return is used to send back a value to the caller and it can be stored in variable to use it later

// let RF = (name) => {
//     return `Hello ${name}`;
// }
// let result = RF("Hemasai");
// console.log(result);



// practice program with functions


// function later(){
//     console.log(`The program is executed after the primary program started executed then it called the callback function!`);
// }

// ((name, callback) => {
//     console.log(`Hello welcome to my world ${name}!`);
//     callback();
// })("hemasai", later);



//  Strings

// const sentence = "   I love javascript";

// console.log(`Original sentence: ${sentence}`)
// // string properties

// console.log(sentence.length); // properties doesnt req '()', here length is a prop

// // string methods

// console.log(sentence.toLowerCase()); // method req '()', () represents function call, it converts to lowercase
// console.log(sentence.toUpperCase()); // converts to uppercase
// console.log(sentence.trim()); // it removes the white spaces from start and end. it also has two more trimStart() and trimEnd().


// //  checking start/end
// console.log(sentence.startsWith("I")); // if the condition is true it returns true otherwise false
// console.log(sentence.endsWith("javascript")); // if the condition is true it returns true otherwise false


// //  extraction methods
// console.log(sentence.slice(3, 8)); // it returns the sliced string, we have to enter two arug.
// console.log(sentence.substring(3, 6)); // it returns the substring
// console.log(sentence.substr(3, 6)); // it returns the substring but it is deprecated.


// // replacing strings

// const sentence2 = sentence.trim().replace("javascript", "Python"); // writing two methods with a dot is call method chaining, and replace method is case sensitive and it replace the first occurance.
// console.log(sentence2);

// const sentence3 = sentence.replaceAll("I", "We"); // replaces all occurences
// console.log(sentence3);

// //using regex
// console.log(sentence.replace(/javascript/g, "python"));



// // searching methods

// console.log(sentence.search("javascript")); // for search regex can be used

// console.log(sentence.includes("javascript")); // if the condition is true it returns true otherwise false
// console.log(sentence.indexOf("javascript")); // if the condition is true it returns the index otherwise false
// console.log(sentence.lastIndexOf("love")); // if the condition is true it returns the index otherwise false



// // splitting

// const sentence4 = sentence.trim().split(" ");
// console.log(sentence4); // it splits the string into an array



// // string concatination

// // there are two ways to do it

// // using concat
// let result = sentence.trim().concat(" and python.");
// console.log(result);

// // using template literals
// let literal = `${sentence} and python`;
// console.log(literal);



// // character access

// console.log(sentence.charAt(5)); // returns the character at the specified index
// console.log(sentence.charCodeAt(6)); // returns the unicode of the character



// //  repeating strings

// console.log("Hemasai".repeat(4));




// Array methods

// let num = [];  // this is array declaration


// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// console.log(nums.pop()); // pop is used to remove the last element
// console.log(nums.push(10)); // push is used to add element at end
// console.log(nums.shift()); // shift is used to remove the first element
// console.log(nums.unshift(0)); // unshift is used to add element at start
// let result = nums.slice(2, 5);  // slice is used to get the sliced array, it doesn't modify the original array
// console.log(result);
// console.log(nums.splice(2, 5)); // splice is used to remove and add elements, it modifies the original array
// console.log(nums.includes(8)); // includes is used to check the value is in array or not and it returns boolean
// console.log(nums.indexOf(8)); // indexOf is used to find the index of the element

// // find method
// console.log(nums.find((num) => num > 5)); // find is used to find the element based on the condition

// // foreach method
// nums.forEach((num) => console.log(num)); // foreach is used to iterate through the array

// // filter method
// let result2 = nums.filter((num) => { return num > 6 });
// console.log(result2); // filter is used to filter the array based on the condition

// // map method
// let result3 = nums.map((num) => {
//     return num * 2;
// });
// console.log(result3); // map is used to transform the array


// // sort method
// // sort method works differently for numbers and alphabets
// let alpha = ["Hemasai", "Varun", "Dhoni"];
// console.log(alpha.sort()); //for alphabets

// let numeric = [1, 2, 5, 8, 56, 97, 12, 3];
// console.log(numeric.sort((a, b) => a - b)); // for numeric values


// // reverse method
// console.log(nums.reverse()); // reverse the entire array


// // reduce method
// let result4 = nums.reduce((total, num) => {
//     return total + num;
// }, 0);
// console.log(result4); // reduce is used to make array into single value


// // join mehtod
// console.log(alpha.join(",")); // join is used to convert array into string with a specified seprator, here it is comma


// practice

// const orders = [
//     {
//         orderId: 1,
//         customer: {
//             name: 'Hemasai',
//             age: 21,
//             email: "khemasai413@gmail.com",
//             gender: "Male",
//         },
//         items: [
//             {
//                 itemId: "AVIQ7p",
//                 itemName: "Iqoo neo 7 pro",
//                 price: 30000,
//                 quantity: 1,
//             },
//             {
//                 itemId: "FSM53",
//                 itemName: "Samsung M53",
//                 price: 50000,
//                 quantity: 2,
//             }
//         ],
//         address: {
//             country: "India",
//             state: "Andhra Pradesh",
//             district: "Krishna",
//             city: "Gudivada",
//             pincode: 521301,
//         }
//     },

//     {
//         orderId: 2,
//         customer: {
//             name: 'Varun',
//             age: 35,
//             email: "varunG123@gmail.com",
//             gender: "Male",
//         },
//         items: [
//             {
//                 itemId: "AaI15pm",
//                 itemName: "Iphone 15 pro max",
//                 price: 100000,
//                 quantity: 1,
//             },
//             {
//                 itemId: "ASGs23",
//                 itemName: "Samsung S23 Ultra",
//                 price: 120000,
//                 quantity: 2,
//             }
//         ],
//         address: {
//             country: "India",
//             state: "Andhra Pradesh",
//             district: "Guntur",
//             city: "Tenali",
//             pincode: 522201,
//         }
//     },

//     {
//         orderId: 3,
//         customer: {
//             name: 'Dhoni',
//             age: 42,
//             email: "DhoniKorea@gmail.com",
//             gender: "Male",
//         },
//         items: [
//             {
//                 itemId: "AXRpx6P",
//                 itemName: "Redmi poco X6 pro",
//                 price: 25000,
//                 quantity: 1,
//             },
//             {
//                 itemId: "ASG7S67",
//                 itemName: "Realme GT 6T",
//                 price: 30000,
//                 quantity: 1,
//             }
//         ],
//         address: {
//             country: "India",
//             state: "Andhra Pradesh",
//             district: "Chittor",
//             city: "Chittoor",
//             pincode: 517001,
//         }
//     },

//     {
//         orderId: 4,
//         customer: {
//             name: 'Nateesha',
//             age: 50,
//             email: "Nateesha@gmail.com",
//             gender: "Female",
//         },
//         items: [
//             {
//                 itemId: "FVy50",
//                 itemName: "Vivo Y50",
//                 price: 150000,
//                 quantity: 1,
//             },
//             {
//                 itemId: "OR50",
//                 itemName: "Oppo reno 50",
//                 price: 25000,
//                 quantity: 1,
//             }
//         ],
//         address: {
//             country: "India",
//             state: "Andhra Pradesh",
//             district: "East Godavari",
//             city: "Rajahmundry",
//             pincode: 533101,
//         }
//     },

//     {
//         orderId: 5,
//         customer: {
//             name: 'Madhu',
//             age: 25,
//             email: "[EMAIL_ADDRESS]",
//             gender: "Male",
//         },
//         items: [
//             {
//                 itemId: "FRGt6t",
//                 itemName: "Realme GT 6T",
//                 price: 30000,
//                 quantity: 1,
//             },
//             {
//                 itemId: "ONCE4",
//                 itemName: "OnePlus nord CE 4",
//                 price: 24999,
//                 quantity: 2,
//             }
//         ],
//         address: {
//             country: "India",
//             state: "Tamil Nadu",
//             district: "Chennai",
//             city: "Chennai",
//             pincode: 600001,
//         }
//     }
// ];


// // map method
// const summaries = orders.map((order) => {
//     const totalPrice = order.items.reduce((acc, item) => { return acc + item.price * item.quantity }, 0)

//     return `${order.customer.name} placed total orders of ${order.items.length} worth of ₹${totalPrice}`
// });
// console.log(summaries);


// // foreach method

// const DomContainer = document.querySelector("#container ul")

// orders.forEach((order) => {
//     DomContainer.innerHTML += `
//     ${order.customer.name}
//     `
// });