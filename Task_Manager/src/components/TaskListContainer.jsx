/* eslint react/prop-types: 0 */
import { useState, useContext } from "react"
import TaskTab from "./TaskTab"
import CreateTask from "./CreateTask"
import { ValidUserContext } from "../contexts/UserContext"
import {ThemeContext } from "../contexts/ThemeContext"


const TaskListContainer = () => {
    const { currentUser } = useContext(ValidUserContext)
    const { theme } = useContext(ThemeContext)
    const [isAddingTask, setIsAddingTask] = useState(false)

    const toggleIsAddingTask = () => {
        setIsAddingTask((curr) => !curr)
    }
    
    const TaskTabPopulate = () => {
        if (currentUser && currentUser.tasks) {
            return currentUser.tasks.map((task, index) => {
                return (
                    <TaskTab 
                        key={index}
                        index={index}
                        task={task}
                    />
                )
            })
        }
        else {
            return []
        }
    }


    return (
        <div className={`row5 overflow-auto scroller-hide task-list-container secondary-${theme}`}>
            {!isAddingTask ? <button className="btn2" onClick={toggleIsAddingTask}>Create task</button> : ""}
            {!isAddingTask ? 
                TaskTabPopulate() :
                <CreateTask handleClick={() => toggleIsAddingTask()}/>}
        </div>
    )
}

export default TaskListContainer