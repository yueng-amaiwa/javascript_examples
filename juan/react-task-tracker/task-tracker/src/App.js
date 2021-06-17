import Header from './components/header';
import Tasks from './components/tasks';
import AddTask from './components/addTask';
import { useState, useEffect } from 'react';



function App() {
    
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
	const getTasks = async () => {
	    const tasksFromServer = await fetchTasks();
	    setTasks(tasksFromServer);
	}
	getTasks();
    }, [])

    const fetchTasks = async () => {
	const res = await fetch('http://localhost:5001/tasks');
	const data = await res.json();
	return data;
    }

    const getSingleTask = async (id) => {
	const res = await fetch(`http://localhost:5001/tasks/${id}`);
	const data = await res.json();
	return data;
    }
	
    //Add Task
    const addTask = async (task) => {
	//const id = Math.floor(Math.random() * 10000) + 1
	//const newTask = {id, ...task}
	//setTasks([ ...tasks, newTask])
	//
	const id = Math.floor(Math.random() * 10000) + 1
	const res = await fetch('http://localhost:5001/tasks',{
	    method: 'POST',
	    headers: {
		'Content-type': 'application/json',
	    },
	    body: JSON.stringify({id, ...task}),
	});

	const data = await res.json();

	setTasks([ ...tasks, data])

    }
    //Delete Task
    const deleteTask = async (id) => {

	await fetch(`http://localhost:5001/tasks/${id}`, {
	    method: 'DELETE',
	});
	setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = async (id) => {
	    
	const taskToToggle = await getSingleTask(id);
	const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

	const res = await fetch(`http://localhost:5001/tasks/${id}`,{
	    method: 'PUT',
	    headers: {
		'Content-type': 'application/json',
	    },
	    body: JSON.stringify(updTask),
	});

	const data = await res.json();

	setTasks(tasks.map((task) => task.id === id ? { ...task,reminder: data.reminder } : task ))
    }

  return (
    <div className="container">
	<Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)}
	showAdd={showAddTask}
	/> 
	{ showAddTask && <AddTask 
	    onAdd={addTask} 
	/>}
	{tasks.length > 0 ?
	<Tasks 
	tasks={tasks} 
	onDelete={deleteTask}
	onToggle={toggleReminder}
	/> : ('No Tasks to Show!') 
	}
      </div>
  );
}

export default App;
