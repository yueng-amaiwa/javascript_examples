/*
 * button.jsx
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-158-81.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'


const Button = (props) => {

    return (
	<input type="button" 
	value={props.label}
	onClick={props.handleClick}
	/>  
    )
}

export default Button;
