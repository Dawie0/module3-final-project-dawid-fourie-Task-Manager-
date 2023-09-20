/* eslint react/prop-types: 0 */
import { useContext } from "react"
import axios from "axios"
import { TaskIndexContext } from "../contexts/TaskIndexContext"
import { ValidUserContext } from "../contexts/UserContext"

const TaskControl = () => {
    const { taskIndex } = useContext(TaskIndexContext)
    const { setIsEditingTask, currUserTasks, isAddingTask, setIsAddingTask, updateCurrentUserTasks, setTaskSelected } = useContext(ValidUserContext)

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token')

            await axios.put(
                `https://task-manager-backend-three.vercel.app/api/delete/`, 
                { taskId: currUserTasks[taskIndex]._id },
                {
                    headers: {
                        Authorization: token,
                    }
                }
                )
            alert('Task deleted successfully')
        }
        catch (error) {
            console.error('Error deleting task: ', error)
            alert('Failed to delete task. Please try again later.')
        }
        finally {
            updateCurrentUserTasks()
        }
    }

    const handleFinished = async () => {
        try {
            const token = localStorage.getItem('token')

            await axios.put(
                `https://task-manager-backend-three.vercel.app/api/finish/`, 
                { taskId: currUserTasks[taskIndex]._id },
                {
                    headers: {
                        Authorization: token,
                    }
                }
                )
            alert('Task finalized successfully')
        }
        catch (error) {
            console.error('Error finalizing task: ', error)
            alert('Failed to finalize task. Please try again later.')
        }
        finally {
            updateCurrentUserTasks()
        }
    }

    const handleUpdate = async () => {
        if (isAddingTask) {
            setIsAddingTask((curr) => !curr)
        }
        setIsEditingTask((curr) => !curr)
    }

    const handleBack = () => {
        setTaskSelected(false)
    }
    
    return (
        <div className="row4 task-control align-items-center ">
            <div className="me-1 ctrl-button">
                <button onClick={handleBack} className="btn2 d-lg-none">Back</button>
            </div>
            <div className="me-1 ctrl-button">
                <button onClick={handleDelete} className="btn2">Delete Task</button>
            </div>
            <div className="me-1 ctrl-button">
                <button onClick={handleUpdate} className="btn2">Update</button>
            </div>
            <div className="me-1 ctrl-button">
                <button onClick={handleFinished} className="btn2">Finish Task</button>
            </div>
        </div>
    )
}

export default TaskControl