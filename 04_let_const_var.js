// Three different ways to declare variables in javascript

// mutable variable - use let
let age = 30;
age = 31;

// immutable variable - use const
const birthYear = 1991;

// Is going to throw an error
// birthYear = 1990;

// Throws an error: Missing initializer in const declaration
// const job;

var job = "Programmer";
job = "Teacher";

//Difference between let and var is that let is block scope while var is function scope

lastName = "Guzina";
console.log(lastName);

function varTest() {
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  
  function letTest() {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }