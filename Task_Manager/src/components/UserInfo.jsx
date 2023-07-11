/* eslint react/prop-types: 0 */
import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { ValidUserContext } from "../contexts/UserContext"

const UserInfo = () => {
    const navigate = useNavigate()
    const { theme } = useContext(ThemeContext)
    const { updateUSerInfo } = useContext(ValidUserContext)
    const [organization, setOrganization] = useState('')
    const [position, setPosition] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        updateUSerInfo(organization, position)
        setOrganization('')
        setPosition('')
        navigate('/')
    }

    return (
        <div className={`${theme} login-body`}>
            <div className={`card `} >
                <h4 className="title">Fill Out Information</h4>
                    <form action="/submit-form" 
                    // onSubmit={handleSubmit}
                    >
                        <div className="field">
                            <svg xmlns="http://www.w3.org/2000/svg"  className="input-icon" viewBox="0 0 16 16">
                                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
                                <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
                            </svg>

                            <input 
                                autoComplete="off" 
                                id="user-organization" 
                                placeholder="Organization/Company" 
                                className="input-field" 
                                name="user-organization" 
                                type="text"
                                value={organization}
                                onChange={(e) => setOrganization(e.target.value)}
                                required/>
                        </div> 
                        <div className="field">
                            <svg xmlns="http://www.w3.org/2000/svg"  className="input-icon" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                            </svg>

                            <input 
                                autoComplete="off" 
                                id="user-position" 
                                placeholder="Position" 
                                className="input-field" 
                                name="user-position" 
                                type="text"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                required/>
                        </div>
                    </form>
                    <button 
                            className="btn" 
                            onClick={handleSubmit}
                            >Save Information
                    </button>
            </div>
        </div>
    )
}

export default UserInfo