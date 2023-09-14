/* eslint react/prop-types: 0 */
import { useState, useContext, useEffect } from "react"
import { ValidUserContext } from "../contexts/UserContext"
import { TaskIndexContext } from "../contexts/TaskIndexContext"
import axios from "axios"

const CreateTask = ({ handleClick }) => {
    const { 
        currUserData, 
        updateCurrentUser, 
        isEditingTask, isAddingTask, 
        setIsEditingTask, 
        setIsAddingTask, 
        currUserTasks } = useContext(ValidUserContext)
    const { taskIndex } = useContext(TaskIndexContext)
    const [priority, setPriority] = useState('')
    const [name, setName] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [description, setDescription] = useState('')
    // const setBy = currentUser.username

    useEffect(() => {
        if (isEditingTask && currUserTasks[taskIndex]) {
          const editedTask = currUserTasks[taskIndex];
          setPriority(editedTask.task.priority || "");
          setName(editedTask.task.name || "");
          setDueDate(editedTask.task.dueDate || "");
          setDescription(editedTask.task.description || "");
        }
      }, [isEditingTask, taskIndex, currUserTasks]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (isEditingTask && !isAddingTask) {
            try {
                if(
                    priority.trim() === '' || 
                    name.trim() === '' || 
                    dueDate.trim() === '' || 
                    description.trim() === ''
                    ) {
                    alert('Please Fill Out All Task Related Fields')
                }
                else {
                    const task = {
                        priority: priority,
                        name: name,
                        dueDate: dueDate,
                        description: description,
                        // setBy
                    }

                    const token = localStorage.getItem('token')
                    
                    await axios.put(
                        `https://task-manager-backend-three.vercel.app/api/update-task/`, 
                        { taskId: currUserTasks[taskIndex]._id, task: task },
                        {
                            headers: {
                                Authorization: token,
                            }
                        }
                        )
                    alert('Task updated successfully!')
                }
            }
            catch (error) {
                console.error('Error editing task: ', error)
                alert('Failed to edit task. Please try again later.')
            }
            finally {
                setPriority('')
                setName('')
                setDueDate('')
                updateCurrentUser(currUserData.user.email)
                back()
            }
        }
        else if (isAddingTask && !isEditingTask) {
            try {
                if (
                    priority.trim() === '' || 
                    name.trim() === '' || 
                    dueDate.trim() === '' || 
                    description.trim() === ''
                    ) {
                    alert('Please Fill Out All Task Related Fields')
                }
                else {
                    const task = {
                        priority: priority,
                        name: name,
                        dueDate: dueDate,
                        description: description,
                        // setBy
                    }

                    const token = localStorage.getItem('token')
    
                    await axios.post(
                        `https://task-manager-backend-three.vercel.app/api/create-tasks/`, 
                        { userId: currUserData._id, task: task },
                        {
                            headers: {
                                Authorization: token,
                            }
                        }
                    )
                    alert('Task added successfully!')
                }
            }
            catch (error) {
                console.error('Error adding task: ', error)
                alert('Failed to add task. Please try again later.')
            }
            finally {
                setPriority('')
                setName('')
                setDueDate('')
                updateCurrentUser(currUserData.user.email)
                handleClick()
            }
        }

         
    }

    const back = () => {
        setPriority('')
        setName('')
        setDueDate('')
        setIsEditingTask(false) 
        setIsAddingTask(false)
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
                        placeholder="Description" 
                        id="floatingTextarea" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required>
                        </textarea>
                    <label htmlFor="floatingTextarea2">Description</label>
                </div>
                <button type="submit" className="btn">{isEditingTask ? 'Update task' : 'Add Task'}</button>
            </form>
            <button type="submit" className="btn" onClick={back}>Back</button>
        </div>
        
    )
}

export default CreateTask