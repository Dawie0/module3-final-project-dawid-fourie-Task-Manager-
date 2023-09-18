/* eslint react/prop-types: 0 */
import { useContext } from "react"
import { TaskIndexContext } from "../contexts/TaskIndexContext"
import { ThemeContext } from "../contexts/ThemeContext"
import { ValidUserContext } from "../contexts/UserContext"


const TaskTab =  ({ task, index }) => {
    const { taskIndex, setTaskIndex } = useContext(TaskIndexContext)
    const { setTaskSelected } = useContext(ValidUserContext)
    const {theme} = useContext(ThemeContext)

    const selectTask = () => {
        setTaskIndex(index)
        setTaskSelected(true)
    }
    
    return (
        <div className={
            index === taskIndex ? `row6 text-center mt-2 task-tab ${task.isFinished ? `finished` : `selected-task-${theme}`} ` :
            `row6 text-center mt-2 ${task.isFinished ? `finished` : `task-tab task-${theme}`}  `} 
            onClick={selectTask}
            // task.isFinished ? `row6 text-center
        >
            <div className="col-2">
                {task.task.priority}
            </div>

            <div className="col-8">
                {task.task.name}
            </div>

            <div className="col-2 dueDate">
                {`Due: ${task.task.dueDate}`} 
            </div>
        </div>
    )
}

export default TaskTab