/*
 * calculator.jsx
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-158-81.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import CalculatorTitle from './calculatorTitle';
import ScreenRow from './screenRow';
import Button from './button';
import '../index.css';

class Calculator extends Component {
    state = {
	value: ''
    };

    handleClick = (event) => {
	const value = event.target.value;

	if (value ==='=') {

	    if (this.state.value !== '') {
		var ans='';
		try {
		    ans = eval(this.state.value);
		}
		catch(err)
		{
		    this.setState({ value: "Math Error!"});
		}
		if (ans===undefined) {
		    this.setState({ value: "Math Error!"});
		}
		else {
		    this.setState({ value: ans});
		}
	    }
	} else if (value ==='Clear') {
	    this.setState({ value: ''});
	} else if (value ==='Delete') {
		var str = this.state.value;
		str = str.toString()
	        str = str.substr(0,str.length-1);
	        this.setState({value: str});
	} else {
	    console.log(value);
	    this.setState({ value: this.state.value += value});
	}
    };
    render() {
	return (
	    <div className="frame">
		<CalculatorTitle value="My First React Calculator!"/>
		<div class="mainCalc">
		    <ScreenRow value={this.state.value}/>
		    <div className="button-row">
			<Button label={'Clear'} handleClick={this.handleClick}/>
			<Button label={'Delete'} handleClick={this.handleClick}/>
			<Button label={'.'} handleClick={this.handleClick}/>
			<Button label={'/'} handleClick={this.handleClick}/>
		    </div>
		    <div className="button-row">
			<Button label={'7'} handleClick={this.handleClick}/>
			<Button label={'8'} handleClick={this.handleClick}/>
			<Button label={'9'} handleClick={this.handleClick}/>
			<Button label={'*'} handleClick={this.handleClick}/>
		    </div>
		    <div className="button-row">
			<Button label={'4'} handleClick={this.handleClick}/>
			<Button label={'5'} handleClick={this.handleClick}/>
			<Button label={'6'} handleClick={this.handleClick}/>
			<Button label={'-'} handleClick={this.handleClick}/>
		    </div>
		    <div className="button-row">
			<Button label={'1'} handleClick={this.handleClick}/>
			<Button label={'2'} handleClick={this.handleClick}/>
			<Button label={'3'} handleClick={this.handleClick}/>
			<Button label={'+'} handleClick={this.handleClick}/>
		    </div>
		    <div className="button-row">
			<Button label={'0'} handleClick={this.handleClick}/>
			<Button label={'='} handleClick={this.handleClick}/>
		    </div>
		</div>
	    </div>
	)
    }
}

export default Calculator;
