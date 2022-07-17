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


const calcAge2 = function (birthYear) {
    return 2037-birthYear;
}

//arrow function
const calcAge3 = birthYear => 2037-birthYear; //function name - parameter - expression
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Tanzil'));
*/
function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));
