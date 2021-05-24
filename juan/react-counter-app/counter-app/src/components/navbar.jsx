/*
 * navbar.jsx
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-158-81.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'


//Stateless functional component
const NavBar = (props) => {
    return (
	    <nav className="navbar navbar-light bg-light">
	    <div className="container-fluid">
		<a className="navbar-brand" href="#">Navbar
		    <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
		</a>
	    </div>
	    </nav>
	)

};


//Component from class
//class NavBar extends Component {
  //render() {
    //return (
	//<nav className="navbar navbar-light bg-light">
	//<div className="container-fluid">
	    //<a className="navbar-brand" href="#">Navbar
		//<span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
	    //</a>
	//</div>
	//</nav>
    //)
  //}
//}

export default NavBar;
