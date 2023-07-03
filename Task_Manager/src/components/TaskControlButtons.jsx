/* eslint react/prop-types: 0 */
import { useContext } from "react"
import { TaskIndexContext } from "../contexts/TaskIndexContext"

const TaskControl = () => {
    const { taskIndex, deleteTask } = useContext(TaskIndexContext)

    const handleDelete = () => {
        deleteTask(taskIndex)
    }
    
    return (
        <div className="row4 task-control align-items-center ">
            <div className="me-1">
                <button onClick={handleDelete}>Delete Task</button>
            </div>
            <div className="me-1">
                <button>Finish Task</button>
            </div>
            
            
        </div>
    )
}

export default TaskControl