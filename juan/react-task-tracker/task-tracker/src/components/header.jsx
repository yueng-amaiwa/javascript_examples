/*
 * header.jsx
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-158-81.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */

import PropTypes from 'prop-types';
import Button from './button';

const Header = ({ title, onAdd, showAdd }) => {

    //const onClick = () => {
	//console.log('click');
    //}

    return (
	<header className='header'>
	    <h1>{title}</h1>
	    <Button 
		color={showAdd ? 'red' : 'green'} 
		text={showAdd ? 'Close' : 'Add'} 
	    onClick={onAdd} />
	</header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

//CSS Style in JS
//const headingStyle = {
    //color: 'red',
    //backgroundColor: 'black',
//}

export default Header;
