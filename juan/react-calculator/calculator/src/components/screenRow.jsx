/*
 * screenRow.jsx
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-158-81.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'


const screenRow = (props) => {

    return (
	<div className="screen-row">
	    <input type="text" value={props.value}/>
	</div>      
    )
}

export default screenRow;
