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

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Tanzil'));
console.log(yearsUntilRetirement(1950, 'Mike'));
-------------------------------------------
 //Coding Challenge 1
const calcAverage = (a,b,c) => (a + b + c)/3;
const dolphinAverage = calcAverage(44,23,71);
const koalaAverage = calcAverage(85, 54, 41);

function checkWinner (dolphinAverage, koalaAverage) {
    if(dolphinAverage>koalaAverage && dolphinAverage >= 2 * koalaAverage) {
        console.log(`Dolphins win (${dolphinAverage} vs. ${koalaAverage})`);
    } else if(dolphinAverage>koalaAverage && dolphinAverage < 2 * koalaAverage) {
        console.log(`Dolphins have a greater score (${dolphinAverage} vs. ${koalaAverage}, but do not win!)`);
    } else if(koalaAverage>dolphinAverage && koalaAverage>= 2 * dolphinAverage) {
        console.log(`Koalas win (${koalaAverage} vs. ${dolphinAverage})`);
    } else if(koalaAverage>dolphinAverage && koalaAverage < 2 * dolphinAverage) {
        console.log(`Koalas have a greater score (${koalaAverage} vs. ${dolphinAverage}, but do not win!)`);
    } else {
        console.log(`The average team scores are tied`);
    }
}

checkWinner(dolphinAverage, koalaAverage);
------------------------------------------------
*/
const friend1 = 'Mike';
const friend2 = 'Jamal';
const friend3 = 'Peter';

const friends = ['Mike', 'Jamal', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2007, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'newName';
console.log(friends);

const firstName = 'Tanzil'
const array2 = [firstName, 'Hassan', 2022-2000, 'student', friends];
console.log(array2);

//exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 1993, 2018, 2022];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);

console.log(age1, age2, age3);

const ages  = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])]
console.log(ages)


