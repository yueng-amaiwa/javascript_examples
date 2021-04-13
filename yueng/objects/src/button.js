/*
 * scripts2.js
 * Copyright (C) 2021 yuengdelahoz <yuengdelahoz@careaiLaptop>
 *
 * Distributed under terms of the MIT license.
 */

function Button(shape){
	let obj = new Object();
	let status = false; // on/off = true/false
	obj.shape = shape; 
	obj.id = parseInt(Math.random()*1000);
	let life_time = 3;
	obj.powerOn = function(){
		if (life_time < 0){
			console.log("Button: damaged");
			return;
		};

		console.log(life_time);
		life_time = life_time -1;
	
		if (!status){
			status = true;
			console.log("Button: powering on");
		}else{
			console.log("Button: powered on");
		}
	};

	obj.powerOff = function(){
		if (status){
			status = false;
			console.log("Button: powered off");
		}else{
			console.log("Button: already off");
		}
	};

	obj.isDefective = function(){
		return life_time < 0;
	};

	obj.getStatus = function(){
		if (status){
			return "ON";
		}
		else {
			return "OFF";
		}
	}
	console.log(`Button(${obj.id}) with ${obj.shape} shape has been created`);
	return obj;
}


function Hand(shape){
	return {
		'shocked': false,
		'pushButton': function(button){
			console.log('Hand: pushing button');
			if (button.isDefective()){
				console.log('Hand: Nothing to do');
				return;
			}
			if(button.getStatus() ==="ON"){
				button.powerOff();
				// no-op
			}else if(button.getStatus() ==="OFF"){
				button.powerOn();
				this.shocked = true;
				console.log('Hand: Uy sano, me patió esa vaina');
			}
		}
	};
}

function run_example(){
	let bn = new Button("square");
	let hand = new Hand();
	for (let i=0; i <= 20; i++){
		hand.pushButton(bn);
	}
}

