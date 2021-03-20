/*
 * index.js
 * Copyright (C) 2021 juanwilches <juanwilches@juans-mbp-6.lan>
 *
 * Distributed under terms of the MIT license.
 */

function factFunc(form) {
    let x = form.inputbox.value;
    let result = 1;
    if (x >= 0) {
	for (let i = 1; i <= x; i++) {
	    result = result*i 
	}
	alert("The factorial is: " + result);
    } else {
	alert("The factorial does not exist!");
    }
}

function digitFunc(form) {
    let x = form.inputbox.value;
    let digits = [];
    for (let i = 0; x > 0; i++) {
	let result = x % 10;
	x = parseInt(x / 10)
	digits[i] = result;
    }
    
    let finalString = '';
    for (let i = digits.length - 1; i >= 0; i--) {
	finalString += `Digit ${i + 1} = ${digits[i]} \n`;
    }
    alert(finalString)
}


function listFunc(form) {
    let x = form.inputbox.value;
    let nameList = ['juan','manuel','yueng'];

    for (i = 0; i < nameList.length; i++) {
	if (x.toUpperCase() === nameList[i].toUpperCase()) {
	    alert(`Position ${i}, Name ${x}`);
	    break;
	} else if (i == nameList.length - 1) {
	    alert('Name Not Found!');
	} 
    }
}


/*
//FOR and WHILE statements

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

//Never infinite loops, it leads to crashes

//for ([initialization]; [condition]; [increment];) {}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//We can leave out the initialization, condition or increment

/*
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


//Static language: C, C++, Java
//Dynamic Language: python, javascript
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

*/
