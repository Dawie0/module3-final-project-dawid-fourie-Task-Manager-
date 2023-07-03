/* eslint react/prop-types: 0 */
import TaskInfo from "./TaskInfo"
import TaskControl from "./TaskControlButtons"
import { useContext } from "react"
import { TaskIndexContext } from "../contexts/TaskIndexContext"

const TaskInfoContainer = () => {

    const { tasks, taskIndex } = useContext(TaskIndexContext)

    return (
        <div className='row2 '> 
            <TaskInfo task={tasks[taskIndex]}/>
            <TaskControl />
        </div>
    )
}


export default TaskInfoContainer