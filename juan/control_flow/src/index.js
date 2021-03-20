/*
 * index.js
 * Copyright (C) 2021 juanwilches <juanwilches@juans-mbp-6.lan>
 *
 * Distributed under terms of the MIT license.
 */

function readImage(input) {
    let file = input.files[0];

    let file_read = new FileReader();

    file_read.readAsText(file);

    file_read.onload = onLoad(file_read,file);

}

function onLoad(reader,file) {
    let result = reader.result;
    console.log(result.length);

    if (result.length === 12) {
	document.write(`1. File size: ${file.size} \n`);
    } else { 
	document.write(`2. File size: ${file.size}`);
    }
}

/*

/////////////////////////////////////////
/////////////Comparison Operators///////
/////////////////////////////////////////

//Strict Equality ===
//Compares VALUES and DATA TYPES
//Strict Inequality !===

let a = 5;
let b = 10;

console.log(a === b);
console.log(a !=== b);

//Loose equality ==
//Compares only VALUES, DOES NOT compare DATA TYPES
console.log(5 == "5");


//Strict Equality is recommended, better practice, less bugs 

/////////////////////////////////////////
/////////////Logical Operators///////
/////////////////////////////////////////

//AND && = ALL OPERANDS ARE TRUE, then TRUE
//OR || = AT LEAST ONE OPERAND IS TRUE, then TRUE
//NOT ! = Reverses the Boolean value

/////////////////////////////////////////
/////////////Logic and Control Flow///////
/////////////////////////////////////////


//IF statements

const age = 24;

if (age >= 18) {
    console.log('You may enter!')
} else if (age === 18) {
    console.log('You just turned 18, you may enter!')
} else {
    console.log('You are under 18, you cannot enter')
}

*/
