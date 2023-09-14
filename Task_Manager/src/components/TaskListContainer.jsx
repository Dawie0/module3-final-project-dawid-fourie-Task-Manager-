/* eslint react/prop-types: 0 */
import { useContext } from "react"
import TaskTab from "./TaskTab"
import CreateTask from "./CreateTask"
import { ValidUserContext } from "../contexts/UserContext"
import {ThemeContext } from "../contexts/ThemeContext"


const TaskListContainer = () => {
    const { currUserTasks, isEditingTask, isAddingTask, setIsAddingTask, setIsEditingTask } = useContext(ValidUserContext)
    const { theme } = useContext(ThemeContext)

    const toggleIsAddingTask = () => {
        if (isEditingTask) {
            setIsEditingTask((curr) => !curr)
        }
        setIsAddingTask((curr) => !curr)   
    }
    
    const TaskTabPopulate = () => {
        if (currUserTasks ) {
            return currUserTasks.map((task, index) => {
                if (task.isDeleted) {
                    return
                }
                else {
                    return (
                        <TaskTab 
                            key={index}
                            index={index}
                            task={task}
                        />
                    )
                }
            })
        }
        else {
            return []
        }
    }
    

    return (
        <div className={`row5 mb-2 overflow-auto scroller-hide task-list-container secondary-${theme}`}>
            {isAddingTask || isEditingTask ? "" : <button className="btn2" onClick={toggleIsAddingTask}>Create task</button>}
            {isAddingTask || isEditingTask ? 
                <CreateTask handleClick={() => toggleIsAddingTask()}/> :
                TaskTabPopulate()}
        </div>
    )
}

export default TaskListContainer