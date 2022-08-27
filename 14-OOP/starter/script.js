'use strict';
/////////////////////////////////////
// Constructor Function
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never create method in constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const tanzil = new Person('Tanzil', 2000);
console.log(tanzil);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 2033);

console.log(matilda);
console.log(jack);

const jay = 'Jay';

console.log(tanzil instanceof Person);
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

tanzil.calcAge();
matilda.calcAge();

console.log(tanzil.__proto__);
console.log(tanzil.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(tanzil));

Person.prototype.species = 'Homo Sapiens';
console.log(tanzil, matilda);

console.log(tanzil.hasOwnProperty('firstName'));
console.log(tanzil.hasOwnProperty('species'));

console.log(tanzil.__proto__);
console.log(tanzil.__proto__.__proto__);
console.log(tanzil.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 7, 4, 2, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
