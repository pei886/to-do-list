import { useState } from "react"
import { NavBar } from "./NavBar/NavBar";

const AddTask = () =>{
    const [addTask, setAddTask] = useState({
        id: 0,
        name: "",
        details: "",
        status: 0,
      });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (event: any) => {
        const {name, value} = event.target;
        setAddTask((prevTask) => ({ ...prevTask, [name]: value }));
    }

    const handleSubmit = () => {
        console.log(JSON.stringify({addTask}))
        fetch('http://localhost:8080/todolist/add', {
            method: 'POST', 
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(addTask),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Your new task: ', data, 'has been added to your to-do list!')
            })
        setIsSubmitted(true)
    }
    return(
        <>  
            <NavBar />
            <h1>Add a task</h1>
            <ul>
                Name of task: 
                <input type="text" name = "name" onChange={handleInputChange}/>
            </ul>
            <ul>
                Details: 
                <input type="text" name="details" onChange={handleInputChange}/>
            </ul>
            <ul><button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button></ul>

            {isSubmitted && <h4>You have successfully added a task!</h4>}
        </>
    )
}

export default AddTask