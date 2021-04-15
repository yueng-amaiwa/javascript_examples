/*
 * tennis.js
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-156-219.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */

function Racquet(name) {
    this.name = name;
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
	ball.hitBy = this;

	let servePrecision = precision*delta;

	if (servePrecision > 0.5) {
	    ball.setIsIn(true);
	} else {
	    ball.setIsIn(false);
	}
	console.log('Serve by:',this.name,'Weighted Reaction:',servePrecision);
	return delta
    }

    this.hit = function(ball) {
	    
	let weightedReaction = (ball.getNormSpeed() + this.defense + this.getReaction())/3;
	//weightedReaction = (1-0.4)*weightedReaction + 0.4;
	ball.hitBy = this;
	
	if (weightedReaction > 0.4) {
	    let direction = parseInt(Math.random()*2); //0: left, 1:middle, 2:right

	    let delta = (1 - 0.5)*Math.random() + 0.5; 
	    
	    ball.setDirection(direction);
	    ball.setSpeed(this.power*delta);

	    if (precision*delta > 0.5) {
		ball.setIsIn(true);
	    } else {
		ball.setIsIn(false);
	    }
	} else {
		ball.setIsIn(false);
	}
	console.log('Hit by:',this.name,'Weighted Reaction:',weightedReaction);
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
    const MAX_SPEED = 11;
    this.hitBy = null;
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
    this.getNormSpeed = function () {
	return speed/MAX_SPEED;
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
    let r1 = new Racquet('Manuel');
    let r2 = new Racquet('Juan');
    let b1 = new TennisBall();
    
    r1.serve(b1);
    let players = [r1,r2];
    let idx = 0;
    let nextPlayer = players[idx];
    
    let i = 0;
    while (b1.isIn()) {
	nextPlayer.hit(b1);
	idx = (idx + 1) % 2;    
	nextPlayer = players[idx];
    }
    console.log('Loser:',b1.hitBy.name);
}

startRally();
