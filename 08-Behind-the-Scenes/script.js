"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  function printAge() {
    let output = `${firstName}, you are the ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Firstname is variable inside the scope so JS will use that variable intead of the one outside the scope(lookup on the scope chain is not needed)
      const firstName = "Steven";
      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);
      //Function are block scoped and only is true for strict mode
      function add(a, b) {
        return a + b;
      }
      output = "NEW OUTPUT";
    }
    console.log(millenial);
    //add(2, 3);
    console.log(output);
  }
  printAge();
  return age;
}

//Global variable
const firstName = "Jonas";
/* After the call the function does not find the variable inside her scope
 then perform a lookups in the scope chain to find it.
The parent scope of calcAge function is the global scope and the firstName is there.
*/
calcAge(1991);
//We cannot have access variable of the child scope
//console.log(age);
//printAge();
