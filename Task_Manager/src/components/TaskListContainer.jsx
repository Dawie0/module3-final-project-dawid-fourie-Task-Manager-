/* eslint react/prop-types: 0 */
import { useState, useContext } from "react"
import TaskTab from "./TaskTab"
import CreateTask from "./CreateTask"
import { TaskIndexContext } from "../contexts/TaskIndexContext"


const TaskListContainer = () => {
    const { tasks, addTask } = useContext(TaskIndexContext)
    const [isAddingTask, setIsAddingTask] = useState(false)

    const toggleIsAddingTask = () => {
        setIsAddingTask((curr) => !curr)
    }
    
    const TaskTabPopulate = () => {
        return tasks.map((task, index) => {
            return (
                <TaskTab 
                    key={index}
                    index={index}
                    task={task}
                />
            )
        })
    }


    return (
        <div className='row5 overflow-auto'>
            <button onClick={toggleIsAddingTask}>Create task</button>
            {!isAddingTask ? 
                TaskTabPopulate() :
                <CreateTask handleClick={() => toggleIsAddingTask()} addTask={addTask}/>}
        </div>
    )
}

export default TaskListContainer