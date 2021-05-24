/*
 * counter.jsx
 * Copyright (C) 2021 juanwilches <juanwilches@juans-mbp-6.lan>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'


class Counter extends Component {
    //state = {
	//value: this.props.counter.value,
	//tags:["tag1","tag2","tag3"] //[]
    //};

    //styles = {
	//fontSize: '30px',
	//fontWeight: 'bold',
    //}
    
    renderTags() {
	if (this.state.tags.length === 0) return <p>There are no tags!</p>;

	return <ul>
	    {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
	</ul>
    }
    
    //Old way to propagate this
    //constructor() {
	//super();
	//this.handleIncrement = this.handleIncrement.bind(this);
    //}
    
    //Pass in parameters
    //doHandleIncrement = () => {
	//this.handleIncrement({ id: 1});
    //}
    
    //New way to have access to this
    handleIncrement = (product) => {
	console.log(product);
	this.setState({ value: this.state.value + 1 });
    }

    render() {
    
    return  (
	<div>
	    <span 
	    className={this.getBadgeClasses()}>
		{this.formatCount()}
	    </span>
	    <button 
	    //onClick={ () => this.handleIncrement({ id: 1 })} 
	    onClick={ () => this.props.onIncrement(this.props.counter)} 
	    className="btn btn-secondary btn-sm">+</button>
	    <button 
	    onClick={ () => this.props.onDecrement(this.props.counter)} 
	    className="btn btn-secondary btn-sm m-2">-</button>
	    <button 
	    onClick={() => this.props.onDelete(this.props.counter.id)} 
	    className="btn btn-danger btn-sm m-2">Delete
	    </button>

       </div>
//	{this.state.tags.length === 0 && 'Please create a new tag!'}
//	{this.renderTags()}
   );
  }
    getBadgeClasses() {
	let classes = "badge m-2 badge-";
	classes += (this.props.counter.value === 0) ? "warning" : "primary";
	return classes
    }
    formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
    }

}

export default Counter;
