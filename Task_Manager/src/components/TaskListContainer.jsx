/* eslint react/prop-types: 0 */
import { useState, useEffect } from "react"
import TaskTab from "./TaskTab"
import CreateTask from "./CreateTask"


const TaskListContainer = () => {
    const [tasks, setTasks] = useState([])
    const [isAddingTask, setIsAddingTask] = useState(false)

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks')
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    const deleteTask = (taskId) => {

    }

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
                    deleteTask={() => deleteTask(index)}
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