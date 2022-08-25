'use strict';

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
