const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

   // calcAge: function () {
   //    console.log(this);
   //     return 2037 - this.birthYear;
   calcAge: function () {
       this.age = 2037 - this.birthYear;
       return this.age;
   },

   getSummary: function () {
       return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
   }
 
};
// Any function that is attached to an object is called a method
// Method is a property holding a function value

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary());