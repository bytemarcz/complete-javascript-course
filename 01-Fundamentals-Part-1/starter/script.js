// let - declare empty variables, mutate variables, only when a var needs to change
// const - declare variables that are never supposed to change in the future, no empty vars, always default to const
// var - completely avoid, prior to ES6 in legacy codebases, and works like let 
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

var job = 'teacher';
job = 'engineer';

// bad idea, it doesn't create the variable on the current scope and js will create a property on the global object. 
lastName = 'Zamora';
console.log(lastName);

const now = 2037;
const ageMario = now - 1994;
const ageSarah = now - 2020;
console.log(ageMario, ageSarah);

console.log(ageMario * 2, ageMario / 10, ageMario ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 

const firstName = 'Mario';
const lastName = 'Zamora';
console.log(firstName + ' ' + lastName);

// Assignement operators
let x = 10 + 5; // 15
x += 10;  // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--
x--;
console.log(x);

// Comparison operators
console.log(ageMario > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageMario = now - 1994;
const ageSarah = now - 2020;
console.log(now - 1991 > now - 2018);

console.log(25-10-5);

let x, y; 
x = y = 25-10-5; // x = y = 10 , x = 10 
console.log(x, y);

const averageAge = (ageMario + ageSarah) / 2
console.log(ageMario, ageSarah, averageAge);

const firstName = 'Mario';
const job = 'Software Engineer';
const birthYear = '1994';
const year = 2026

const mario = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(mario)

const marioNew = `I'm ${firstName}, a ${year - birthYear}, year old ${job}!`;
console.log(marioNew);

console.log(`Just a regular string....`);

console.log('String with \n\
    multiple \n\
    lines')

console.log(`String
multiple
lines`);

const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license 👌')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another 
    ${yearsLeft} years :)`);
}

const birthYear = 1994;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Mario'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 31 + ' years old');
console.log('23' + '10' + 3);
console.log('23' / '2');

let n = '1' + 1; // 11
n = n - 1; // 11 - 1 = 10
console.log(n);
