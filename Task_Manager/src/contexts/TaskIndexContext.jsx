/* eslint react/prop-types: 0 */
import { createContext, useState } from "react";

const TaskIndexContext = createContext()

const TaskIndexContextProvider = ({ children }) => {

    const [taskIndex, setTaskIndex] = useState(0)

    const changeIndex = (index) => {
        setTaskIndex(index)
    }

    return (
        <TaskIndexContext.Provider value={{ taskIndex, changeIndex }}>
            {children}
        </TaskIndexContext.Provider>
    )
}

export {TaskIndexContext, TaskIndexContextProvider}