/* eslint react/prop-types: 0 */
import { useContext } from "react"
import { TaskIndexContext } from "../contexts/TaskIndexContext"

const TaskListWidget = () => {
    const { tasks } = useContext(TaskIndexContext)

    const taskList = tasks.map((task, index) => {
        return (
            <li key={index}>{task.name}</li>
        )
    })
    return(
        <div className="task-list-widget">
            <h4>Tasks:</h4>
            <ul>
                {taskList}
            </ul>
        </div>
    )
}

export default TaskListWidget