import AddTask from "./AddTask"
import { useEffect, useState } from "react"
import { NavBar } from "./NavBar/NavBar"



const TaskList = () => {
    const [initialtask, setTask] = useState([
        {id:1, name:"Do Homework",details:"page 1-10", status:0},
    ])

    const handleToggle = (taskId : number) => {
        console.log(taskId)
        fetch('http://localhost:8080/todolist', {
            method : 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: taskId.toString(),
        })
            .then(response => response.json())
            .then(data => setTask(data))
            .catch(error => console.error('Error sending data to server:', error));
    }

    const handleDelete = (taskId : number) => {
        console.log(taskId)
        fetch('http://localhost:8080/todolist/del', {
            method: 'POST',
            headers : {
                'Content-Type' : 'text/plain',
            },
            body: taskId.toString(),
        })
            .then(response => response.json())
            .then(data => setTask(data => data.filter(task => task.id !== taskId)))
            .catch(error => console.error('Error sending data to server:', error));
        console.log(initialtask)
    }

    useEffect(() => {
        fetch('http://localhost:8080/todolist')
            .then(response => response.json())
            .then(data => setTask(data))
    }, [])

    return(
        <>
        <NavBar />
        <h1>To-do List</h1>
        <ul className="list-group">
            {initialtask.map((task) => (
                    <li className="list-group-item"
                        style={{ textDecoration: task.status === 1 ? 'line-through' : 'none' }}
                        key={task.id}
                    >
                        {task.name}        -        {task.details}
                    <div className="text-end">
                        <button type="button" 
                            className="btn btn-outline-success mr-1"
                            onClick={() => handleToggle(task.id)}>Toggle</button>
                        <button type="button" 
                            className="btn btn-outline-danger"
                            onClick={() => handleDelete(task.id)}>Delete</button>
                    </div>
                    </li>
        ))}

        </ul>
        </>
    )
}

export default TaskList