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

Person.hey = function () {
  console.log(`Hey there 👋🏾`);
  console.log(this);
};

Person.hey();

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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  //   Static Method
  static hey() {
    console.log(`Hey there 👋🏾`);
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1986);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

const walter = new PersonCl('Walter White', 1965);
PersonCl.hey();

//Setter/Getter
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);

ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);
