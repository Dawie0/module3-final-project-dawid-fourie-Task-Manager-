/* eslint react/prop-types: 0 */
import TaskInfo from "./TaskInfo"
import TaskControl from "./TaskControlButtons"
import { useContext, useEffect } from "react"
import { TaskIndexContext } from "../contexts/TaskIndexContext"
import { ValidUserContext } from "../contexts/UserContext"
import { ThemeContext } from "../contexts/ThemeContext"

const TaskInfoContainer = () => {
    const { currentUser } = useContext(ValidUserContext)
    const { taskIndex, setTaskIndex } = useContext(TaskIndexContext)
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        if (currentUser && currentUser.tasks && currentUser.tasks.length > 0) {
            setTaskIndex(0)
        }
    }, [currentUser, setTaskIndex])

    if (currentUser && currentUser.tasks && currentUser.tasks.length > 0) {
        return (
            <div className={`row2 task-info secondary-${theme}`}> 
                <TaskInfo task={currentUser.tasks[taskIndex]} username={currentUser.username}/>
                <TaskControl />
            </div>
        )
    }
    else {
        return (
            <div className={`row2 task-info secondary-${theme}`}> 
                <TaskInfo task={false}/>
            </div>
        )
    }
    
}


export default TaskInfoContainer