// Values and Variables Assignment
const country = 'United States of America';
const continent = 'North America';
let population = 13;

console.log(country);
console.log(continent);
console.log(population);

// Data Types, let, const, var
let isIsland = false;
language = 'American English'
isIsland = true;

console.log(isIsland);
console.log(language);

console.log("Country split in half " + population / 2);
//population++
console.log(population);
console.log(population >= 6);
console.log(population <= 33);

const description = (`${country} is in ${continent} and its ${population} million people speak ${language}`);

console.log(description);

if (population > 33) {
    console.log("Portugal's population is 22 million below average");
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17' ); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143