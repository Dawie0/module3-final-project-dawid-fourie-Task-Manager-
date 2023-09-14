/* eslint react/prop-types: 0 */
import { useState, useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import axios from "axios"
import './login.css'

const Register = () => {
    const { theme } = useContext(ThemeContext)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [retypePassword, setRetypePassword] = useState('')
    const [registered, setRegistered] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (registered) {
            navigate('/login')
        }
    }, [registered])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
                alert('Please fill in all fields')
                return
            }
            if (password === retypePassword) {
                const response = await axios.post(`https://task-manager-backend-three.vercel.app/api/users/register`, {
                    user: {
                        username: username,
                        email: email,
                        password: password
                    }
                })
                if (response.data.message) {
                    alert('Registration successful!')
                } 
            }
            else {
                alert('passwords do not match')
            }

        }
        catch (error) {
            console.log(error)
        }
        setUsername('')
        setEmail('')
        setPassword('')
        setRetypePassword('')
        setRegistered(true)
    }

    const backToLogin = (event) => {
        event.preventDefault()
        navigate('/login')
    }

    return (
        <div className={`${theme} login-body`}>
            <div className="card">
                <h4 className="title">Register</h4>
                <form action="/submit-form" onSubmit={handleSubmit}>
                    <div className="field">
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="input-icon" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                        <input 
                            autoComplete="off" 
                            id="loguser" 
                            placeholder="User Name" 
                            className="input-field" 
                            name="loguser" 
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required/>
                    </div>
                    <div className="field">
                        <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path>
                        </svg>
                        <input 
                            autoComplete="off" 
                            id="logemail" 
                            placeholder="Email" 
                            className="input-field" 
                            name="logemail" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                    </div>
                    <div className="field">
                        <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path></svg>
                        <input 
                            autoComplete="off" 
                            id="logpass" 
                            placeholder="Password" 
                            className="input-field" 
                            name="logpass" 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                    </div>
                    <div className="field">
                        <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path></svg>
                        <input 
                            autoComplete="off" 
                            id="relogpass" 
                            placeholder="Re-enter Password" 
                            className="input-field" 
                            name="relogpass" 
                            type="password"
                            value={retypePassword}
                            onChange={(e) => setRetypePassword(e.target.value)}
                            required/>
                    </div>
                    <button 
                        className="btn" 
                        type="submit"
                        onClick={handleSubmit}>
                        Register
                    </button>
                    <button 
                        className="btn" 
                        onClick={backToLogin}>
                        Back to Login
                    </button>
                </form>
        </div>
    </div>
    )
}

export default Register