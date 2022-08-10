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
*/
////////////////////////////////////

// 133. The call & apply method
const delta = {
  airline: 'delta',
  iataCode: 'DA',
  bookings: [],
  //book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push(({ flight: `${this.iataCode}${flightNum}` }, name));
  },
};

delta.book(23, 'Tanzil Hassan');
delta.book(6789, 'John Doe');
console.log(delta);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EU',
  bookings: [],
};

const book = delta.book;

//Does NOT work
// book(23, 'Tanzil Jama');

// Call Method
book.call(euroWings, 23, 'Tanzil Hama');
console.log(euroWings);

book.call(delta, 2345, 'Mary  Cooper');
console.log(delta);

const swiss = {
  airline: 'Swiss Cheese Air',
  iataCode: 'SCA',
  bookings: [],
};

book.call(swiss, 583, 'Kevin Durant');
console.log(swiss);

//Apply Method
const flightData = [567, 'Jorge Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); //better than using apply
////////////////////////////

// 134. Bind Method
const bookEW = book.bind(euroWings);
const bookSW = book.bind(swiss);
const bookDA = book.bind(delta);

bookEW(23, 'Steve Williams');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Tanzil Hassan');
bookEW23('Jamal Aka');

// WIth event listeners
delta.planes = 300;
delta.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', delta.buyPlane.bind(delta));

//Partial application
const addtax = (taxRate, value) => value + value * taxRate;
console.log(addtax(0.1, 200));

const addVAT = addtax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(2300));

const addTaxRate = function (taxRate) {
  return function (value) {
    return value + value * taxRate;
  };
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(2300));
