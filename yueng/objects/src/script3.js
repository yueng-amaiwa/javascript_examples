/*
 * script3.js
 * Copyright (C) 2021 yuengdelahoz <yuengdelahoz@careaiLaptop>
 *
 * Distributed under terms of the MIT license.
 */

function Person(name){
	this.name = name;
	this.hola = function(){
		console.log("Hola, mi nombre es",this.name);
	}
}

function Cantante(name){
	Person.call(this,name);
	this.lastname = "Delahoz";
	this.cantar = function(){
		console.log("Madrid, madrid, madrid, hala madrid y nada más");
	}
}

let p1 = new Person("Yuyu");
let c1 = new Cantante("Juan");
