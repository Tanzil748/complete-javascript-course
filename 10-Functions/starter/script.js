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

///////////////////////////////////
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

// 131. Functions accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); // the two brackets and g selects all the spaces
};

// console.log(oneWord('jbejbfj  heHHdhbedejb bjwdb'));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order functions (takes in another function)
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by : ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👋🏾');
};

document.body.addEventListener('click', high5);

['Jonas', 'Tanzil', 'Adam'].forEach(high5);
*/
//////////////////////////////////
// 132. Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Tanzil');

greet('Hello')('Tanzil'); //same as above

//Arrow Function Equivalent to function returning function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Friend');
