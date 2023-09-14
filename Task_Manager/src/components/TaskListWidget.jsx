/* eslint react/prop-types: 0 */
import { useContext } from "react"
import { ValidUserContext } from "../contexts/UserContext"


const TaskListWidget = () => {
    const { currUserTasks } = useContext(ValidUserContext)

    const taskList = () => {
        if (currUserTasks ) {
            return currUserTasks.map((task, index) => {
                if (task.isDeleted || task.isFinished) {
                    return
                }
                return (
                    <li key={index}>{task.task.name}</li>
                )
            })
        }
        return null
    }

    return(
        <div className="task-list-widget scroller-hide">
            <h4>Tasks:</h4>
            <ul>
                {taskList()}
            </ul>
        </div>
    )
}

export default TaskListWidget