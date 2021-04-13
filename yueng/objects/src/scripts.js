/*
 * yueng.js
 * Copyright (C) 2021 yuengdelahoz <yuengdelahoz@Yueng>
 *
 * Distributed under terms of the MIT license.
 */
class Tree {
	age = null;
	leaveCount = null;
	constructor(age){
		this.age = age;
	}
	getLeaveCount(){
		if (this.leaveCount === null){
			let decade = 1 + this.age % 10;

			switch (decade){
				case 1:
					this.leaveCount = 100;
					break;
				case 2:
					this.leaveCount = 200;
					break;
				case 3:
					this.leaveCount = 300;
					break;
				case 4:
					this.leaveCount = 400;
					break;
				case 5:
					this.leaveCount = 500;
					break;
				case 6:
					this.leaveCount = 600;
					break;
				case 7:
					this.leaveCount = 700;
					break;
				case 8:
					this.leaveCount = 800;
					break;
				case 9:
					this.leaveCount = 900;
					break;
				case 10:
					this.leaveCount = 1000;
					break;
			}
			this.leaveCount = -Math.floor(Math.random()*10) + this.leaveCount + Math.floor(Math.random()*10) ;
		}
		return this.leaveCount;
	}


}

function Arbol(edad){
	this.edad = edad;
	let conteoDeHojas = null;
	this.getConteoDeHojas = function(){
		if (conteoDeHojas === null){
			let decade = 1 + edad % 10;

			switch (decade){
				case 1:
					conteoDeHojas = 100;
					break;
				case 2:
					conteoDeHojas = 200;
					break;
				case 3:
					conteoDeHojas = 300;
					break;
				case 4:
					conteoDeHojas = 400;
					break;
				case 5:
					conteoDeHojas = 500;
					break;
				case 6:
					conteoDeHojas = 600;
					break;
				case 7:
					conteoDeHojas = 700;
					break;
				case 8:
					conteoDeHojas = 800;
					break;
				case 9:
					conteoDeHojas = 900;
					break;
				case 10:
					conteoDeHojas = 1000;
					break;
			}
			conteoDeHojas = -Math.floor(Math.random()*10) + conteoDeHojas + Math.floor(Math.random()*10) ;
		}
		return conteoDeHojas;
	}
}

