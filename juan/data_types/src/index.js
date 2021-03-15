/*
 * index.js
 * Copyright (C) 2021 juanwilches <juanwilches@juans-mbp-6.lan>
 *
 * Distributed under terms of the MIT license.
 */

//Define 5 examples of each data_type and their definition

//Primitives/Value
// Strings
// Numbers
// Booleans
// Undefined
// null

//////////////////////////////////
////////////Strings///////////////
/////////////////////////////////
//String Single quotes, double quotes, back ticks
//String a sequence of characters

const singleQuotes = 'Hello world';
console.log(singleQuotes);
const doubleQuotes = "Hello world";
console.log(doubleQuotes);
const backticks = `Hello!!!`;
console.log(backticks);

//backticks usage, to embed variables inside the string
const name1 = 'John';
const helloname1 = `Hello ${name1}`;
console.log(helloname1);

//////////////////////////////////
////////////Numbers///////////////
/////////////////////////////////

//Number in JavaScripts can be floats, integers
const wholeNumber = 5;
const decimalNumber = 0.5;
console.log(wholeNumber);

const firstNumber = 5;
const secondNumber = 10;
console.log(firstNumber);

const result = firstNumber - secondNumber;
console.log(result);

//NaN: not a number, a numeric datatype
//Infinity: not a number, a numeric datatype

/////////////////////////////////
////////////Booleans/////////////
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

///////////////////////////////
////////////Null///////////////
///////////////////////////////

let weight = null; //Empty, value unknown
console.log(weight);
weight = 20;
let height = null;
console.log(height);
height = 180;
var bmi = null;
console.log(bmi);
bmi = 50;

//////////////////////////////////
////////////Undefined///////////////
/////////////////////////////////

let x; //usually not assign = undefined
console.log(typeof x);
let a, b, c, d, e, f;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

//difference between null and undefined, null is assigned, undefined is not assigned

