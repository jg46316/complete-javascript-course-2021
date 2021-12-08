"use strict";
/*console.log(me);
console.log(job);
console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;
*/

//Function
//Output 5
console.log(addDecl(2, 3));
//Output 'Uncaught ReferenceError: Cannot access 'addExpr' before initialization'
//console.log(addExpr(2 + 3));
//console.log(addArrow(2 + 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
//numProducts is undifined because of Hoisting and it will be false
//Conclusion just dont use var to declare variables
//Declare variables at the top of your code.
//Declare function before and then call them
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;
function deleteShoppingCart() {
  console.log("All products deleted");
}

// var variables will create a property on the window object
var x = 1;
//Let and const will not be visible on the window object
let y = 2;
const z = 3;
