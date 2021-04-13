/*
 * scripts2.js
 * Copyright (C) 2021 yuengdelahoz <yuengdelahoz@careaiLaptop>
 *
 * Distributed under terms of the MIT license.
 */
let arb = 
	{
		'age':12,
		'getLeaveCount': function(){
		let count = 0;
		if (this['age'] > 50){
			count = 10;
		}
		else
			count = 200;
		return count;
		}
	}

let arb2 = 
	{
		'age':13,
		'getLeaveCount': function(){
		let count = 0;
		if (this['age'] > 50){
			count = 10;
		}
		else
			count = 200;
		return count;
		}
	}

function MyTree(age){
	return {
		'age':age,
		'getLeaveCount': function(){
		let count = 0;
		if (this['age'] > 50){
			count = 10;
		}
		else
			count = 200;
		return count;
		}
	}
}



function MyTree2(age){
	let obj = new Object();
		obj['age'] = age;
		obj.getLeaveCount = function(){
		let count = 0;
		if (this['age'] > 50){
			count = 10;
		}
		else
			count = 200;
		return count;
		}
	return obj;

}
