/*
 * calculatorTitle.jsx
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-158-81.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'


const CalculatorTitle = (props) => {

    return (
	<div className="calculator-title">
	    { props.value }
	</div>
    )
}

export default CalculatorTitle;
