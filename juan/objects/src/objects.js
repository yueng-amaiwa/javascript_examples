/*
 * objects.js
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-156-219.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */


function Tree(age) {
    //Age of tree
    this.age = age;
    
    //Number of leaves
    let randNum = 10-(-10) * Math.random() + (-10);
    let numLeaves = Math.floor(this.age % 10 + randNum);

    if (numLeaves < 0) {
	numLeaves = 0;
    }
    
    //Encapsulate number of leaves
    this.getNumLeaves = function () {return numLeaves};

    //Health Status
    this.healthStatus = function (season) {
	let hStat = null;
	if (numLeaves == 0) {
	    hStat = 'Bad';
	} else if (season == 'spring') {
	    hStat = 'Good';
	} else if (season == 'summer') {
	    hStat = 'Excellent';
	} else if (season == 'fall') {
	    hStat = 'Regular';
	} else {
	    hStat = 'Bad';
	}
	return hStat;
    }
}

let firstTree = new Tree(50);
