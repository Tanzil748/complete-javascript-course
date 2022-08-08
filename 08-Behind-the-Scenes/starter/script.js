'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;

//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 2001) {
//       const firstName = 'Steven';
//       const str = `Oh, and this is a milennial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'New Output!';
//     }
//     //add(2, 3); //cannot run add in strict mode since out of scope
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Tanzil';

// calcAge(2000);
// -------------------
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Tanzil';
// let job = 'graduate';
// const year = 2000;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

//Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// //testing if these variables are in window (only var is)
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
// -----------------

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //   console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //   console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
