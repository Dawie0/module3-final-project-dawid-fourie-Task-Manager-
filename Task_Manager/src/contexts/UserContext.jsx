/* eslint react/prop-types: 0 */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ValidUserContext = createContext()

const ValidUserContextProvider = ({ children }) => {
    const [currUserData, setCurrUserData] = useState(null)
    const [currUserTasks, setCurrUserTasks] = useState([])
    const [canLogIn, setCanLogIn] = useState(false)
    const [isAddingTask, setIsAddingTask] = useState(false)
    const [isEditingTask, setIsEditingTask] = useState(false)
    const [taskSelected, setTaskSelected] = useState(false)

    useEffect(() => {
        if (currUserData) {
            updateCurrentUserTasks()
            setCanLogIn(true)
        }
    }, [currUserData])
    

    const updateCurrentUser = async (email) => {
        try {
            const response = await axios.get(`https://task-manager-backend-three.vercel.app/api/users?email=${email}`)
            setCurrUserData(response.data)   
        }
        catch (error) {
            console.error('Error getting user details:', error)
        }
    }

    const updateCurrentUserTasks = async () => {
        try {
            const response = await axios.get(`https://task-manager-backend-three.vercel.app/api/tasks?userId=${currUserData._id}`)
            if (response.status === 200) {
                if (response.data.length > 0) {
                    setCurrUserTasks(response.data)
                }
                else {
                    setCurrUserTasks([])
                }   
            }
            else if (response.status === 404) {
                setCurrUserTasks([])
            }
        }
        catch (error) {
            console.error('Error getting user tasks')
        }
    }

    const contextValue = {
        currUserData, 
        setCurrUserData,
        currUserTasks, 
        setCurrUserTasks,
        canLogIn, 
        setCanLogIn,
        isAddingTask, 
        setIsAddingTask,
        isEditingTask, 
        setIsEditingTask,
        updateCurrentUser,
        updateCurrentUserTasks,
        taskSelected, 
        setTaskSelected

    }

    return (
        <ValidUserContext.Provider value={contextValue}>
            {children}
        </ValidUserContext.Provider>
    )
}

export { ValidUserContext, ValidUserContextProvider }