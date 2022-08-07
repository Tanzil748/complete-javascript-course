'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 2001) {
      const firstName = 'Steven';
      const str = `Oh, and this is a milennial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'New Output!';
    }
    //add(2, 3); //cannot run add in strict mode since out of scope
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Tanzil';

calcAge(2000);
