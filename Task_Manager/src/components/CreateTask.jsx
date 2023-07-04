/* eslint react/prop-types: 0 */
import { useState } from "react"

const CreateTask = ({ handleClick, addTask }) => {
    const [priority, setPriority] = useState('')
    const [name, setName] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTask = {
            priority,
            name,
            dueDate,
            description
        }

        addTask(newTask)

        setPriority('')
        setName('')
        setDueDate('')
        handleClick()
    }


    return (
        <form onSubmit={handleSubmit}> 
            <input
                type="text"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                placeholder="Priority"
                required 
            />
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Task Name"
                required 
            />
            <input 
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
            />
            <input 
                type="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <button type="submit" className="btn">Add Task</button>
        </form>
    )
}

export default CreateTask