/* eslint react/prop-types: 0 */
import { useContext } from "react"
import { TaskIndexContext } from "../contexts/TaskIndexContext"
import { ThemeContext } from "../contexts/ThemeContext"

const TaskTab =  ({ task, index }) => {
    const { taskIndex, setTaskIndex } = useContext(TaskIndexContext)
    const {theme} = useContext(ThemeContext)

    const selectTask = () => {
        setTaskIndex(index)
        
    }
    
    return (
        <div className={index === taskIndex ? `row6 text-center mt-2 task-tab selected-task-${theme}` : `row6 text-center mt-2 task-tab task-${theme}`} onClick={selectTask}>
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