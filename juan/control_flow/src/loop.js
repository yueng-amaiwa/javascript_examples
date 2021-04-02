/*
 * index.js
 * Copyright (C) 2021 juanwilches <juanwilches@juans-mbp-6.lan>
 *
 * Distributed under terms of the MIT license.
 */

function factFunc(x) {
    //let form = input.form;
    //let x = form.inputbox.value;
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

