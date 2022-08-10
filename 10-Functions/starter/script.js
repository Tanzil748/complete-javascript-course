'use strict';

/*
//128. Default Parameter
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 20394);
createBooking('LH123', undefined, 20394); //undefined lets the default value run if you want to skip a certain parameter
*/

//129. How Passing Arguments Work

const flight = 'LH123';
const tanzil = {
  name: 'Tanzil Hassan',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456789) {
    alert('Check in');
  } else {
    alert('Wrong passport number');
  }
};

checkIn(flight, tanzil);

console.log(flight);
console.log(tanzil);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000);
};

newPassport(tanzil);
checkIn(flight, tanzil);
