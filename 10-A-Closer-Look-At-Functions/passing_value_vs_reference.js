'use strict';

const flight = 'LH234';

const jasmin = {
    name: 'Jasmin Guzina',
    passport: 24554544545
}

const checkIn = function(flightNum, passenger) {
flightNum = 'LH999';
passenger.name = 'Mr.' + passenger.name;
if(passenger.passport === 24554544545){
    alert('Checked in')
}else{
    alert('Wrong passport')
}

}

checkIn(flight, jasmin);

console.log(flight);
console.log(jasmin);