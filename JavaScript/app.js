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


const password = "Hemasai@123";

let userPassword = "";

let attempts = 0;

const maxAttempts = 5;
while (attempts < maxAttempts) {
    userPassword = prompt("Enter password: ");

    if (userPassword === password) {
        console.log("login success");
        break;
    }
    else {
        console.log("invalid password");
        console.log(`Remaining attempts: ${maxAttempts - attempts - 1}`);
    }
    attempts++;
}

if (attempts === maxAttempts) {
    console.log("account locked!!");
}