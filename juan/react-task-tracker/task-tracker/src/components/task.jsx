/*
 * task.jsx
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-158-81.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
    
    return(
    <div 
	className={`task ${task.reminder ? 'reminder' : ''}`}
	onDoubleClick={() => onToggle(task.id)}
    >
	<h3>{task.text} 
	<FaTimes 
	style={{ color: 'red', cursor: 'pointer'}}
	onClick={() => onDelete(task.id)}
	/></h3>
	<p>{task.day}</p>
	</div>
    
    )


}

export default Task;
