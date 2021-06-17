/*
 * button.jsx
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-158-81.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */

import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
   
    return (
	<button 
	style={{ backgroundColor: color}} 
	className='btn'
	onClick={onClick}
	>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}


Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;
