/* eslint react/prop-types: 0 */
import { useContext } from "react"
import { UserIcon } from "../assets/icons"
import { ThemeContext } from '../contexts/ThemeContext'
import { useNavigate } from 'react-router-dom'
import { ValidUserContext } from "../contexts/UserContext"

import DarkModeButton from './DarkModeButton'
import './settings.css'

const SettingsMenu = ({ logout }) => {
    const navigate = useNavigate()
    const { theme } = useContext(ThemeContext)
    

    const handleLogout = () => {
        console.log('Logging Out')
        logout()
    }
    const toUserInfo = () => {
        navigate('/user-info')
    }

    return(
        <div>
            <a className="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <UserIcon />
            </a>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className={`offcanvas-header ${theme}`}>
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Settings</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                <div className={`offcanvas-body ${theme}`}>
                    <div className="mb-5">
                    Personalize your app here
                    </div>
                    <div className="theme-button ">
                        Update Profile
                        <button className="btn btn-center" onClick={toUserInfo}>
                            <UserIcon />
                        </button>
                    </div>
                    <div className="theme-button ">
                        Choose Theme
                        <DarkModeButton />
                    </div>
                    
                    <div>
                        <button className="btn" onClick={handleLogout}>
                            Log Out
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SettingsMenu