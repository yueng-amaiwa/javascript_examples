/*
 * counters.jsx
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-158-81.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {

  render() {
    return (
	<div>
	    <button
		onClick={this.props.onReset}
		className="btn btn-primary btn-sm m-2">
		Reset
	    </button>
	    {this.props.counters.map(counter => (
	    <Counter 
		key={counter.id} 
		//value={counter.value}
		//id={counter.id}
		counter={counter}
		onDelete={this.props.onDelete}
		onIncrement={this.props.onIncrement}
		onDecrement={this.props.onDecrement}
	    > 
	    </Counter>))}
	</div>
    )
  }
}

export default Counters;
