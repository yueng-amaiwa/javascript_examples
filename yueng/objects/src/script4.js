/*
 * script4.js
 * Copyright (C) 2021 yuengdelahoz <yuengdelahoz@careaiLaptop>
 *
 * Distributed under terms of the MIT license.
 */

function Person(name){
	this.name = name;
	this.hablar = function(palabra){
		if (palabra.isVulgar()){
			console.log("Disculpame por decir esto...", palabra.data);
		}
		else{
			console.log(palabra.data);
		}
	}
}

function Palabra(data){
	this.data = data;
	this.isVulgar = function(){
		if (data.includes("hp") || data.includes("malparido") || data.includes("cul")){
			return true;
		}
		else return false;
	}
}

