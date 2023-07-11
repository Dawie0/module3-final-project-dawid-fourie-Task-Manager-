/* eslint react/prop-types: 0 */
import { useContext } from "react"
import { TaskIndexContext } from "../contexts/TaskIndexContext"
import { ValidUserContext } from "../contexts/UserContext"

const TaskControl = () => {
    const { taskIndex } = useContext(TaskIndexContext)
    const { deleteTask } = useContext(ValidUserContext)

    const handleDelete = () => {
        deleteTask(taskIndex)
    }
    
    return (
        <div className="row4 task-control align-items-center ">
            <div className="me-1">
                <button onClick={handleDelete} className="btn2">Delete Task</button>
            </div>
            {/* <div className="me-1">
                <button className="btn2">Finish Task</button>
            </div> */}
            
            
        </div>
    )
}

export default TaskControl