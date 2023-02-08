'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //   //ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2);
// createBooking('LH123', 1, 1000);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 100);

// const flight = 'LH234';
// const details = {
//   name: 'Iqbal Erani',
//   passport: 21315162165,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 21315162165) {
//     alert('Checked in');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// checkIn(flight, details);
// console.log(flight);
// console.log(details);

//Call Method
//Apply Method
//Bind Method

//IIFE
const runOnce = function () {
  console.log('This will run once only');
};
runOnce();

(function () {
  console.log('This will run once only');
})();
