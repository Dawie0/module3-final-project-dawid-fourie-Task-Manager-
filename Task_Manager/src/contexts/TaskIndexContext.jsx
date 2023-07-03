/* eslint react/prop-types: 0 */
import { createContext, useState, useEffect } from "react";

const TaskIndexContext = createContext()

const TaskIndexContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])
    const [taskIndex, setTaskIndex] = useState()

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks')
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks))
            console.log(storedTasks)
            setTaskIndex(0)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
        if (tasks.length > 0) {
            setTaskIndex(0)
        }
    }, [tasks])

    
    const addTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.filter((_, index) => index !== taskId)
            tasks.length > 0 ? setTaskIndex(0) : setTaskIndex()
            return updatedTasks
        })
        console.log('Deleting task with ID:', taskId)
        
        
    }

    const contextValue = {
        taskIndex,
        setTaskIndex,
        tasks,
        deleteTask,
        addTask
    }

    return (
        <TaskIndexContext.Provider value={contextValue}>
            {children}
        </TaskIndexContext.Provider>
    )
}

export {TaskIndexContext, TaskIndexContextProvider}