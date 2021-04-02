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
		n3 = n1*1.8 + 32;
		let text = null;
		if (n3 >= 10 && n3<= 32){
			text = ", Low Temperature" ;
		}
		else if(n3 >= 33 && n3<= 70){
			text = ", Nice Temperature" ;
		}
		else if(n3 >= 70 && n3<= 100){
			text = ", High Temperature" ;
		}
		else{
			text = ", Unknown Temperature" ;
		}

		n3 = n3 + text +  "°F";
	}
	else{
		n3 = (n1-32)*(5/9)

		let text = null;
		if (n1 >= 10 && n1<= 32){
			text = ", Low Temperature" ;
		}
		else if(n1 >= 33 && n1<= 70){
			text = ", Nice Temperature" ;
		}
		else if(n1 >= 70 && n1<= 100){
			text = ", High Temperature" ;
		}
		else{
			text = ", Unknown Temperature" ;
		}

		n3 = n3 + text +  "°C";
	}

	console.log('result',n3);
	document.getElementById('frm2').result.value="Result: " + n3;
}

function multiplication(){
	let n1 = parseInt(document.getElementById("frm3").number1.value);
	let n2 = parseInt(document.getElementById("frm3").number2.value);

	op = n1 * n2;
	let result = 0;
	let result_str = "";
	x = Math.abs(n1);
	y = Math.abs(n2);

	for (let i=0; i < x; i++){
		result += y;
		if (i == (x-1)){
			result_str = result_str + y;
		}
		else{
			result_str = result_str + y + "+";
		}
	}
	if (op < 0){
		result = -result;
	}
	result_str = result_str + " = " + result;
	document.getElementById('frm3').result.value = result_str;
}
