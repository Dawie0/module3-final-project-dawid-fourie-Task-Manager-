/* eslint react/prop-types: 0 */
import { useState, useContext } from "react"
import { ValidUserContext } from "../contexts/UserContext"

const CreateTask = ({ handleClick }) => {
    const { currentUser, addTaskToUser } = useContext(ValidUserContext)
    const [priority, setPriority] = useState('')
    const [name, setName] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [description, setDescription] = useState('')
    const setBy = currentUser.username

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTask = {
            priority,
            name,
            dueDate,
            description,
            setBy
        }

        addTaskToUser(newTask)

        setPriority('')
        setName('')
        setDueDate('')
        handleClick()
    }

    const back = () => {
        setPriority('')
        setName('')
        setDueDate('')
        handleClick()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <div className="col-3 mb-3">
                    <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                    <select className="form-select" id="autoSizingSelect" value={priority} onChange={(e) => setPriority(e.target.value)} required>
                        <option defaultValue={priority}>Priority</option>
                        <option value={"High"}>High</option>
                        <option value={"Med"}>Med</option>
                        <option value={"Low"}>Low</option>
                    </select>
                </div>

                
                <div className="form-floating mb-3">
                    <input 
                        autoComplete="off"
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Task Name" />
                    <label htmlFor="floatingInput">Task Name</label>
                </div>

                <input 
                    type="date"
                    className="form-control mb-3"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
                
                <div className="form-floating mb-3">
                    <textarea 
                        autoComplete="off"
                        className="form-control" 
                        placeholder="Leave a comment here" 
                        id="floatingTextarea2" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required>
                        </textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
                <button type="submit" className="btn">Add Task</button>
            </form>
            <button type="submit" className="btn" onClick={back}>Back</button>
        </div>
        
    )
}

export default CreateTask