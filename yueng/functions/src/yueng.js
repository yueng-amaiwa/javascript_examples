/*
 * yueng.js
 * Copyright (C) 2021 yuengdelahoz <yuengdelahoz@Yueng>
 *
 * Distributed under terms of the MIT license.
 */

function calculate(op){
	let n1 =document.getElementById("frm1").number1.value;
	let n2 =document.getElementById("frm1").number2.value;
	let n3=null;
	if (op === '+'){
		n3 = parseInt(n1) + parseInt(n2);
	}
	else if (op === '-'){
		n3 = parseInt(n1) - parseInt(n2);
	}
	else if (op === '*'){
		n3 = parseInt(n1) * parseInt(n2);
	}
	else{
		n3 = parseInt(n1) / parseInt(n2);
	}

	console.log('result',n3);
	document.getElementById('frm1').result.value = n3;
}

function temperatureConversion(op){
	let n1 =document.getElementById("frm2").number1.value;
	let n3=null;
	if (op === 'F'){
		n3 = n1*1.8 + 32
		n3 = n3 + "°F"
	}
	else{
		n3 = (n1-32)*(5/9)
		n3 = n3 + "°C"
	}

	console.log('result',n3);
	document.getElementById('frm2').result.value="result: " + n3;
}
