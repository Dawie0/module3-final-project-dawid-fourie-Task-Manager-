/* eslint react/prop-types: 0 */
import { useContext } from "react"
import SettingsMenu from "./SettingsMenu"
import { ThemeContext } from "../contexts/ThemeContext"
import { ValidUserContext } from "../contexts/UserContext"

const UserInfoTab = () => {
    const { currUserData } = useContext(ValidUserContext)
    const { theme } = useContext(ThemeContext)

    

    return (
        <div className={`row4 text-center user-info secondary-${theme}`}>
            <div className="col-2 user-icon" >
                <SettingsMenu />
            </div>
            <div className="col-10">
                {`${currUserData ? currUserData.user.username : ''}` }
                
            </div>
        </div>
    )
}

export default UserInfoTab


