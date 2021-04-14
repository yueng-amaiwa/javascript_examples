/*
 * tennis.js
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-156-219.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */

function Racquet() {
    this.id = parseInt(Math.random()*1000);
    //Attack attributes
    this.power = Math.random()*10+1;
    var precision = (1 - 0.4)*Math.random() + 0.4;
    
    //Attack methods
    this.getPrecision = function() {
	return precision;
    };
    
    this.serve = function(ball) {
	let direction = parseInt(Math.random()*2); //0: left, 1:middle, 2:right
	let delta = (1 - 0.9)*Math.random() + 0.9; 
	
	ball.setDirection(direction);
	ball.setSpeed(this.power*delta);

	if (precision*delta > 0.5) {
	    ball.setIsIn(true);
	} else {
	    ball.setIsIn(false);
	}
	return delta
    }

    //Defense attributes
    this.defense = Math.random();
    var reaction = Math.random();
    
    //Defense methods
    this.getReaction = function() {
	return reaction;
    };
    
}

function TennisBall() {
    let place = true;
    let direction = null;
    let speed = null;
    //Getter
    this.isIn = function() {
	return place;
    }
    this.getDirection = function() {
	return direction;
    }
    this.getSpeed = function() {
	return speed;
    }

    //Setter
    this.setIsIn = function (isIn) {
	place = isIn;
    }
    this.setDirection = function (dir) {
	direction = dir;
    }
    this.setSpeed = function (power) {
	let wind = Math.random()*-1 + Math.random();    
	speed = power + wind;
    }

}

function startRally() {
    let racquet1 = new Racquet();
    console.log(racquet1);
    let racquet2 = new Racquet();
    console.log(racquet2);
    let ball1 = new TennisBall();
    console.log(ball1);
}

function printChars(ball) {
    console.log('Is in?',ball.isIn());
    console.log('Direction?',ball.getDirection());
    console.log('Speed?',ball.getSpeed());
}

//startRally();
let r1 = new Racquet();
let b1 = new TennisBall();
