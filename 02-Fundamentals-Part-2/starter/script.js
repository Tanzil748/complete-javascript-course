'use strict';
 /*
let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive');

//not allowed to use certain keywords  in strict mode
// const interface = 'Audio';
// const private = 534;
// const if = 1;

function logger() {
    console.log('My name is Tanzil');
}

//calling/running/invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
*/

//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1999); //need to assign to variable to capture result
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
    return 2037-birthYear;
}

const age2 = calcAge2(1995);

console.log(age1, age2);