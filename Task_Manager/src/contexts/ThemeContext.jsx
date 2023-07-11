/* eslint react/prop-types: 0 */
import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const localTheme = localStorage.getItem('theme-task-manager')
        setTheme(localTheme)
    }, [])

    useEffect(() => {
        localStorage.setItem('theme-task-manager', theme)
    }, [theme])

    const toggleDarkMode = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }


    return (
        <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }