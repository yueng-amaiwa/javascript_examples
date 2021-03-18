/*
 * yueng.js
 * Copyright (C) 2021 yuengdelahoz <yuengdelahoz@Yueng>
 *
 * Distributed under terms of the MIT license.
 */

var lines = null;

function readFile(input) {
	let file = input.files[0];
	reader = new FileReader();
	reader.readAsText(file);

	reader.onload = function() {
		var result = reader.result;
		console.log(result.length);

		if (result.length === 12){
			alert(`1. File size: ${file.size}`);
		}
		else{
			alert(`2. File size: ${file.size}`);
		}
	};

	reader.onerror = function() {
		console.log(reader.error);
	};

}

//Create an image that allow the user to communicate with JS using a text file with a list of number, names to satisfy the following conditions using FOR and WHILE:
//1. Create a loop on JS to execute the X Factorial for a given number.
//User enter: 5
//JS Result: 1 x 2 x 3 x 4 x 5 = 120
function factorial(){
	let number =document.getElementById("frm1").number.value;
	let f = 1;
	for (let i=1; i<=number; i++){
		f = f*i
	}
	alert(`Factorial of ${number} is ${f}`);
}

//2. Create a loop to identify each number from a given XYZW number and listed as:
//JS Result:
//a. X
//b. Y
//c. Z
//d. W

function identify(){
	let number =document.getElementById("frm2").number.value;
	var array = [];
	let n =0;
	while (number !== 0){
		n = number%10;
		array.push(n);
		number = Math.floor(number/10);
	}
	let rarray = array.reverse();
	console.log(rarray);
	alert(rarray);
}

function loadFile(input){
	let file = input.files[0];
	reader = new FileReader();
	reader.readAsText(file);

	reader.onload = function() {
		let result = reader.result;
		lines = result.split('\n');
		alert(`file loaded: \n${result}`);

	};

	reader.onerror = function() {
		console.log(reader.error);
	};
}

function recognize(){
	let name =document.getElementById("frm3").name.value;
	if (lines !=null ){
		for (let i=0; i < lines.length; i++){
			line = lines[i];
			if (line.length < 3){
				console.log("CONTINUE");
				continue;
			}
			let comp = line.includes(name);
			if (comp){
				console.log(line);
			}
			let rst = `${line} === ${name} (${comp}))`
			alert(rst);
		}
	}else{
		alert("You have not loaded a list");
	}

}
