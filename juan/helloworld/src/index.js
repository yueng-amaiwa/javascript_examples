/*
 * index.js
 * Copyright (C) 2021 juanwilches <juanwilches@juans-mbp-6.lan>
 *
 * Distributed under terms of the MIT license.
 */

//Primitives/Value
// Strings
// Numbers
// Booleans
// Undefined
// null

let name = 'Juan'; //String literal
let age = 30; //Literal
let isApproved = true; //Boolean
let firstName = undefined; //undefined
let selctedColor = null; //null variable

//Other data types
//Object: most important data type
//Symbol


//Single line comments

/*
 Multiline comment
 This
 is
 a 
 multiline
 comment
*/

//Create variables with var or let keyword

/*
var variableName = 'test';
let variableName = 'test';
cons variableName = 'test';
*/

//1. The name shoud be unique
//2. The name should not be any reserver keyword
//3. The name must start with a character

const exampleString = 'Hello World';

//////////////////////////////////
////////////Strings///////////////
/////////////////////////////////
//String Single quotes, double quotes, 

const singleQuotes = 'Hello world';
const doubleQuotes = "Hello world";
const backticks = `Hello!!!`;

//backticks usage, to embed variables inside the string
const name1 = 'John';
const backticks = `Hello ${name1}`;

console.log(typeof backticks)

//////////////////////////////////
////////////Numbers///////////////
/////////////////////////////////

const wholeNumber = 5;
const decimalNumber = 0.5;

const firstNumber = 5;
const secondNumber = 10;

const result = firstNumber - secondNumber;

//NaN: not a number, a numeric datatype

//////////////////////////////////
////////////Booleans///////////////
/////////////////////////////////

//true
//false

const isCool = true;
console.log(isCool);
console.log(typeof isCool);

if (isCool) {
    console.log("Hi man, you are cool");
} else {
    console.log("Hi man, you are not cool");
}

const age = 20;

console.log(age > 20);

//////////////////////////////////
////////////Null///////////////
/////////////////////////////////

const age = null; //Empty, value unknown

age = 20;

//////////////////////////////////
////////////Null///////////////
/////////////////////////////////

let x; //usually not assign = undefined
console.log(typeof x);

//difference between null and undefined, null is assigned, undefined is not assigned

//////////////////////////////////
////////////Objects///////////////
/////////////////////////////////

//used to store collections of data

const name = 'John';
const age = 25;

const person = {
    name: 'John';
    age: 25;
}

console.log(person);
console.log(person.name);
console.log(person.age);



//Dynamic Language
//Type of variable can change

console.log(typeof age);
document.write(age);

age = 'Thirty';

console.log(typeof age);
document.write('<br>');
document.write(age);

//References Types
//undefined is a type and a value
//objects, arrays and functions

let person = {
    name: 'Juan',
    age: 30
};

console.log(person);
document.write(person);

//Dot notation
person.name = 'John';
person.age = 40;

console.log(person);

//Bracket notation, you don't know the property until runtime
person['name'] = 'Joseph';
person['age'] = 45;

console.log(person);

let selection = 'name';
person[selection] = 'Iuan';
console.log(person);


let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
console.log(selectedColors);

console.log(selectedColors.length);


function greet(name) {
    console.log('Hello World from Function' + name);
}

greet()
greet('Juan')
greet('Mac')

function square(number) {
    return number * number;
}

console.log(square(2));
