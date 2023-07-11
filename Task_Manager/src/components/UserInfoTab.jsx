/* eslint react/prop-types: 0 */
import { useContext } from "react"
import SettingsMenu from "./SettingsMenu"
import { ValidUserContext } from "../contexts/UserContext"
import { ThemeContext } from "../contexts/ThemeContext"

const UserInfoTab = ({ logout }) => {
    const { currentUser } = useContext(ValidUserContext)
    const { theme } = useContext(ThemeContext)

    

    return (
        <div className={`row4 text-center user-info secondary-${theme}`}>
            <div className="col-2 user-icon" >
                <SettingsMenu logout={() => logout()}/>
            </div>
            <div className="col-10">
                {currentUser && currentUser.username  ?
                    `${currentUser.username} - ${currentUser.position}` :
                    logout()}
                
            </div>
        </div>
    )
}

export default UserInfoTab


