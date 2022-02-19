'use strict';

///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// Bind method
const book = lufthansa.book;
const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
bookEW(23, 'Jasmin Guzina');

const bookEW23 = book.bind(eurowings, 24);
bookEW23('Jasmin Guzina');

// When we use object with event listener we need to use the method bind()

lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane when we call like this then the object luftansa is calling the method and this return the object, in the below case we are calling by clicking the button and this rightfully return the button

// In this call lufthansa,buyPlane when is calling (this)  it return NaN because it is calling the element .buy class which is the button

//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial applications

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value * value * 0.23;

console.log(addVAT(100));
// Functions Returning Functions
const addTaxr = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVATr = addTaxr(0.23);
console.log(addVATr(200));
