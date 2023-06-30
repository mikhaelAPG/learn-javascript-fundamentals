// let js = 'amazing';
// // if (js === 'amazing') alert('JavaScript is FUN!');
// // if still want to display explicit ouput to result use console.log(40 + 8 + 23 - 10);
// console.log(40 + 8 + 23 - 10);

// // if still want to display explicit ouput to result use console.log(40 + 8 + 23 - 10); 
// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23);

// // variable and values
// // let firstName = "matilda";

// // console.log(firstName);
// // console.log(firstName);
// // console.log(firstName);

// // variables name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let Person = "jonas";
// let PI = 3.1415;

// let job1 = "programmer";
// let job2 = "teacher";

// // do this
// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";
// let person = "jonas";

// console.log(myFirstJob);

// // practice assigments
// let country = "Indonesia";
// let continent = "Asia";
// let population = "275";

// console.log(country);
// console.log(continent);
// console.log(population);

// /* 
//     This is multiline comment
// */

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof 'Jonas');
// console.log(typeof javascriptIsFun);


// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null); // bugs and error di js, hasilnya object

// // mutable variable/variable dapat diubah
// let age = 30;
// age = 31;

// // imutable variable/variable tidak dapat diubah
// const birthYear = 1993;
// // birthYear = 1990;

// // const job; // membutuhkan initial value ketika menggunakan const

// // sama seperti let cuman ini adalah cara dari versi js sebelumnya es6, jangan menggunakan var
// var job = 'programmer';
// job = "teacher";

// lastName = 'Schemedmann';
// console.log(lastName);

// // Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schemedmann';
// console.log(firstName + ' ' + lastName);

// // Assigment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// x--; // x = x - 1 = 99
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2019);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2019);

// console.log(25-10-5);

// let x,y;
// x = y = 25-10-5 // x = y = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// // coding challenge 1

// // massMark = 78;
// // heightMark = 1.69;
// // massJohn = 92;
// // heightJohn = 1.95;
// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// BMIMark = massMark / heightMark ** 2;
// BMIJohn = massJohn / (heightJohn * heightJohn);

// markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// // template literals
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// const age = 15;
// const isOldEnough = age >= 19;

// if (isOldEnough) {
//     console.log('Sarah can start driving license');
// } else {
//     const yearLeft = 18 - age;
//     console.log(`Sarah is to young. Wait another ${yearLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// // coding challenge 2

// massMark = 78;
// heightMark = 1.69;
// massJohn = 92;
// heightJohn = 1.95;
// // massMark = 95;
// // heightMark = 1.88;
// // massJohn = 85;
// // heightJohn = 1.76;

// BMIMark = massMark / heightMark ** 2;
// BMIJohn = massJohn / (heightJohn * heightJohn);

// markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// if (markHigherBMI) {
//     console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})`);
// } else {
//     console.log(`John's(${BMIJohn}) is higher than Mark's(${BMIMark})`);
// }

// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old'); // console.log('I am ' + String(23) + ' years old');
// console.log('23' + '10' + 3);
// console.log('23' - '10' - 3);
// console.log('23' * 2);

// let n = '1' + 1; // '11'
// n = n - 1; 
// console.log(n);

// console.log(2+3+4+'5');
// console.log('10'-'4'-'3'-2+'5');

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//     console.log("Don't spend it all :) ");
// } else {
//     console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Heigh is UNDEFINED');
// }

// const age = 18;
// if (age === 18) console.log('you nust became an adult :D (strict)');

// if (age == 18) console.log('you nust became an adult :D (loose)');

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 23 == 23 --> FALSE
//     console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//     console.log('7 is also a cool number');
// } else if (favourite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7 or 9');
// }

// if (favourite !== 23) console.log('Why not 23?');

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shoudDrive = hasDriversLicense && hasGoodVision;

if (shoudDrive) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy');
// }

// bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy');
// } 

// bonus 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No team wins the trophy');
}