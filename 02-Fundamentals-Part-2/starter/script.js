'use strict'; // strict mode enabled 

/*
// Testing strict mode
let hasDriversLicense = false; 
let passTest = true; 

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 4345;

// Functions 
function logger(params) {
    console.log('My name is Mario');
}

// calling / running / invoking the function 
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // The passed in values are the arguments 
console.log(appleJuice);

const appleOranageJuice = fruitProcessor(2, 4);
console.log(appleOranageJuice);

// function Declaration 
// const age1 = calcAge1(1994); // can call a function declaration before defining it.

// function calcAge1(birthYear) {
//     return 2026 - birthYear;
// }
// console.log(calcAge1(1994));

// function expression with no name
// Anonymous function
// Expression and expression produces values 
const calcAge2 = function (birthYear) {
    return 2026 - birthYear;
}
const age2 = calcAge2(1994);
console.log(age2);

// Arrow function assigned to a value 
const calcAge3 = birthYear => 2026 - birthYear;
const age3= calcAge3(1999)
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2026 - birthYear;
    const retirement = 67 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1980, 'Scott'));
console.log(yearsUntilRetirement(1994, 'Mario'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and 
// ${orangePieces} pieces of orange`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

// There are different ways of writing functions but they all work in a similar way: 
// Receive input data, transform data, and then output data.
const calcAge = function(birthYear) {
    return 2026 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 67 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🥳`)
        return -1
    }
}
console.log(yearsUntilRetirement(1994, 'Mario'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

// Arrays in JS - A Big contiainer of iteams that we can reference and stored some place. This is a data structure. 
// Arrays and objects are two of the most important DS
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years)

console.log(friends[0]);
console.log(friends[2]);