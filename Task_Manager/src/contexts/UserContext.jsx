/* eslint react/prop-types: 0 */
import { createContext, useState, useEffect } from "react";


const ValidUserContext = createContext()

const ValidUserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    
    

    useEffect(() => {
        const storedUsers = localStorage.getItem('users')
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers))
            console.log(storedUsers)
            
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    const addUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser])
    }

    const settingCurrentUser = (user) => {
        setCurrentUser(user)
    }

    const login = (email, password) => {
        const user = users.find(
            (user) => user.email === email && user.password === password
        )

        if (user) {
            setCurrentUser(user)
        }
        else {
            setCurrentUser(null)
            console.log('Invalid email or password')
            alert('Invalid email or password')
        }
    }

    const logout = () => {
        setCurrentUser(null)
        
    }

    const addTaskToUser = (task) => {
        setUsers((prevUsers) => {
            return prevUsers.map((user) => {
                if (user.username === currentUser.username) {
                    return {
                        ...user,
                        tasks: user.tasks ? [...user.tasks, task] : [task]
                    }
                }
                return user
            })
        })

        setCurrentUser((prevUser) => {
            return {
                ...prevUser,
                tasks: prevUser.tasks ? [...prevUser.tasks, task] : [task]
            }
        })
    }

    const deleteTask = (taskId) => {
        setUsers((prevUsers) => {
            const updatedUsers = prevUsers.map((user) => {
                if (user.username === currentUser.username) {
                    const updatedTasks = user.tasks.filter((_, index) => index !== taskId)
                    return {
                        ...user,
                        tasks: updatedTasks
                    }
                }
                return user
            })
            return updatedUsers
        })
        setCurrentUser((prevUser) => {
            if (prevUser.username === currentUser.username) {
                const updatedTasks = prevUser.tasks.filter((_, index) => index !== taskId)
                return {
                    ...prevUser,
                    tasks: updatedTasks
                }
            }
            return prevUser
        })
    }

    const updateUSerInfo = (organization, position) => {
        setUsers((prevUsers) => {
            const updatedUsers = prevUsers.map((user) => {
                if (user.username === currentUser.username) {
                    return {
                        ...user,
                        organization,
                        position
                    }
                }
                return user
            })
            return updatedUsers
        })

        setCurrentUser((prevUser) => {
            if (prevUser && prevUser.username === currentUser.username) {
                return {
                    ...prevUser,
                    organization,
                    position
                }
            }
            return prevUser
        })
    }

    const contextValue = {
        users,
        addUser,
        currentUser,
        login,
        logout,
        addTaskToUser,
        settingCurrentUser,
        deleteTask,
        updateUSerInfo
    }

    return (
        <ValidUserContext.Provider value={contextValue}>
            {children}
        </ValidUserContext.Provider>
    )
}

export { ValidUserContext, ValidUserContextProvider }