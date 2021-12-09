"use strict";

// Window object
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //This is undefined
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  //This is pointing to Window Object because arrow does not get his own this keyword and it use the this of parrent scope
  console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
//Method borrowing
matilda.calcAge = jonas.calcAge;
//It will call the birthyear of Matilda
matilda.calcAge();

const f = jonas.calcAge();
//Regular function calling there is no owner and this keyword is undefined
f();
