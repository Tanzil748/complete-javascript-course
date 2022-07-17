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

const friends = ['Mike', 'Jamal', 'Peter'];

// Add Elements
const newLength = friends.push('Hay'); //adds to end of array
console.log(friends);
console.log(newLength); //push returns a value of array length

friends.unshift('John'); //adds to start of array
console.log(friends);

// Subtract Elements
const popped = friends.pop(); //gets rid of last element
console.log(friends)
console.log(popped);

friends.shift(); //removes first element
console.log(friends)

console.log(friends.indexOf('Jamal')); //returns index of element

console.log(friends.includes('Mike')); //checks if element is in array

if(friends.includes('Jamal')) {
    console.log(`You have a friend called Jamal`)
}
------------------------------
//Coding Challenge 2
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0]+ tips[0], bills[1]+ tips[1], bills[2]+ tips[2]];
console.log(bills, tips, total)
------------------------------

const jonasArray = [
    'Jonas', 
    'Smith',
    2037-1991,
    'teacher',
    ['Mike', 'Jamal', 'Peter']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Mike', 'Jamal', 'Peter']
};

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Mike', 'Jamal', 'Peter']
};

console.log(jonas);

console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')
console.log(interestedIn);

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!')
}

jonas.location = 'Portugal'
jonas['twitter'] = '@jonasSmith'
console.log(jonas)

//Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Mike', 'Jamal', 'Peter'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037-birthYear;
    // }

    // calcAge: function() {
    //     return 2037-this.birthYear; //this points to the entire jonas object
    // }

    calcAge: function() {
        this.age = 2037-this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver license`
    }
};

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));
// console.log(jonas.age)

//challenge
// if(jonas.hasDriversLicense) {
//     console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has a driver's license`);
// } else {
//     console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he does not have a driver's license`);
// }

console.log(jonas.getSummary());

--------------------------------
//Coding challenge 4
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass/(this.height ** 2);
        return this.bmi;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass/(this.height ** 2);
        return this.bmi;
    }
};

console.log(mark.calcBMI(), john.calcBMI())

if(mark.bmi > john.bmi) {
    console.log(`${mark.firstName}'s BMI (${mark.bmi} is higher than ${john.firstName}'s (${john.bmi}))`)
} else {
    console.log(`${john.firstName}'s BMI (${john.bmi} is higher than ${mark.firstName}'s (${mark.bmi}))`)
}
-----------------------
*/
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}🏋🏽‍♂️`)
}
