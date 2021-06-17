/*
 * tasks.jsx
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-158-81.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */

import Task from './task';


const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
	<>
	    {tasks.map((task) => (
		<Task 
		key={task.id} 
		task={task} 
		onDelete={onDelete}
		onToggle={onToggle}
		/>
	    ))
	    }
	</>
    )
}

export default Tasks;
