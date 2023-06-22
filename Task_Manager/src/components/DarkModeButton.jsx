/* eslint react/prop-types: 0 */
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const DarkModeButton = () => {
    const { theme, toggleDarkMode } = useContext(ThemeContext)

    return (
        <button onClick={toggleDarkMode} >
            {theme}
        </button>
    )
}

export default DarkModeButton