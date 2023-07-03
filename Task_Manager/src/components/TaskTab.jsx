/* eslint react/prop-types: 0 */
import { useContext } from "react"
import { TaskIndexContext } from "../contexts/TaskIndexContext"

const TaskTab =  ({ task, index }) => {
    const { setTaskIndex } = useContext(TaskIndexContext)

    const selectTask = () => {
        setTaskIndex(index)
        
    }
    
    return (
        <div className="row6 text-center mt-2 task-tab" onClick={selectTask}>
            <div className="col-2">
                {task.priority}
            </div>

            <div className="col-8">
                {task.name}
            </div>

            <div className="col-2">
                {`Due: ${task.dueDate}`} 
            </div>
        </div>
    )
}

export default TaskTab