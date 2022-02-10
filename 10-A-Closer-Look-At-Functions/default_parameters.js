'use strict';
const bookings  = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199) {
    //ES5
    //numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
};
createBooking('LH123', 4);
createBooking('LHY23', undefined, 1000)