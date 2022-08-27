'use strict';
/*
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
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const tanzilCar = new Car('Honda CRV', 60);
const mercedes = new Car('Mercedes', 100);

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

//Just testing the constructor functions
console.log(tanzilCar.accelerate());
console.log(tanzilCar.brake());
console.log(tanzilCar.brake());
console.log(tanzilCar.brake());
console.log(tanzilCar.brake());
console.log(mercedes.brake());
console.log(mercedes.brake());
console.log(mercedes.accelerate());
*/

// Class Expression
// const PersonCl = class {}

//Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1986);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();
