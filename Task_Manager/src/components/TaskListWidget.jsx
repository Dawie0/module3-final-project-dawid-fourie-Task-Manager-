/* eslint react/prop-types: 0 */
import { useContext } from "react"
import { ValidUserContext } from "../contexts/UserContext"


const TaskListWidget = () => {
    const { currentUser } = useContext(ValidUserContext)

    const taskList = () => {
        if (currentUser && currentUser.tasks) {
            return currentUser.tasks.map((task, index) => {
                return (
                    <li key={index}>{task.name}</li>
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