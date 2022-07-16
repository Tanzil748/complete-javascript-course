// let js ='amazing';
// console.log(40+8+23-10);

// let firstName = 'Tanzil'
// console.log(firstName);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Tanzil');

// javascriptIsFun = 'Yes!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null); //returns as object but really is undefined

// let age = 30;
// age = 31;

// const birthYear = 2000;
// birthYear = 1990; cannot reassign

// const job; missing initializor error 

// never use var
// var job = 'programmer';
// job = 'student';
/*
//Math operators
const now = 2037;
const ageTanzil = now - 2000;
const ageSarah = now - 2018;
console.log(ageTanzil, ageSarah);

console.log(ageTanzil * 2, ageTanzil / 2, 2**3);

const firstName = 'Tanzil';
const lastName = 'Hassan';
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10;  //x = x + 10 = 25
x *= 4; //100
x++; //101
x--; //100
x--; //99
console.log(x);

//comparison operators
console.log(ageTanzil > ageSarah);
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2019);

const now = 2037;
const ageTanzil = now - 2000;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2019);

let x, y;
x = y = 25-10-5;
console.log(x,y);

const averageAge = (ageTanzil + ageSarah) / 2;
console.log(ageTanzil,ageSarah, averageAge);
// -------------------------------------------------
//Coding Challenge #1s
let markMassOne = 78;
let markHeightOne = 1.69;
let johnMassOne = 92;
let johnHeightOne = 1.95;

let markBMI = markMassOne / (markHeightOne ** 2);
let johnBMI = johnMassOne / (johnHeightOne ** 2);
console.log(markBMI, johnBMI);

let markHigherBMI = true;
if (markBMI > johnBMI) console.log(markHigherBMI);
// ----------------------------------------------------

const firstName = 'Tanzil';
const job = 'student';
const birthYear = 2000;
const year = 2037;

const tanzil = "I'm " + firstName + ', a ' +  (year - birthYear) + " year old " + job;
console.log(tanzil);

const tanzilNew = `I'm ${firstName} ,a ${year-birthYear} year old ${job}`;
console.log(tanzilNew);

console.log(`Multi
line
try`);


const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log(`Sarah can start driving 🚕`);
} else {
    const yearsLeft = 18- age;
    console.log(`Sarah is not old enough. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

//---------------------------------------------------------------------------
//Coding Challenge 2
let markMassOne = 78;
let markHeightOne = 1.69;
let johnMassOne = 92;
let johnHeightOne = 1.95;

let markBMI = markMassOne / (markHeightOne ** 2);
let johnBMI = johnMassOne / (johnHeightOne ** 2);
console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}
//-----------------------------------------------------------------------------

//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); //first parameter is number, second is string
console.log(inputYear + 18);

console.log(Number('Tanzil')); //returns NaN
console.log(typeof NaN); //returns as number - its invalid number

console.log(String(23),23);

//type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)  //minus triggers conversion to number

// const age = 18;
// if(age === 18) console.log(`You just became an adult`)

const favorite = Number(prompt('Whats your favorite number?'));
// console.log(favorite);
// console.log(typeof favorite);

if(favorite === 23) {
    console.log(`23 is a cool number`);
} else if(favorite ===27) {
    console.log(`27 is best number`);
} else {
    console.log(`number is neither 23 or 27`);
}

const hasDriverLicense = true;
const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive`);
// }

const isTired = false;
// console.log(hasDriverLicense || hasGoodVision || isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive`);
}
*/
//Coding challenge 3
let dolphinsAverage = (96+109+89)/3;
let koalasAverage = (88+91+110)/3;

console.log(dolphinsAverage, koalasAverage);

if(dolphinsAverage > koalasAverage && dolphinsAverage >=100) {
    console.log(`Dolphin's win!`)
} else if (koalasAverage > dolphinsAverage && koalasAverage >=100) {
    console.log(`Koalas win!`)
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100) {
    console.log('Its a draw!')
} else {
    console.log('Teams have not scored enough for trophy')
}
