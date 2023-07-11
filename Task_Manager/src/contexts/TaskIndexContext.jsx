/* eslint react/prop-types: 0 */
import { createContext, useState } from "react";


const TaskIndexContext = createContext()

const TaskIndexContextProvider = ({ children }) => {
    const [taskIndex, setTaskIndex] = useState()

    const contextValue = {
        taskIndex,
        setTaskIndex,
        
    }

    return (
        <TaskIndexContext.Provider value={contextValue}>
            {children}
        </TaskIndexContext.Provider>
    )
}

export {TaskIndexContext, TaskIndexContextProvider}