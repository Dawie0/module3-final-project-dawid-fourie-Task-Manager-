/* eslint react/prop-types: 0 */
import { useState } from "react"


const Login = ({ handleClick }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        handleClick()
    }

    return (
        <div className="login-container ">
            <div className="row justify-content-center ">
                <div className="col-6 ">
                    <h1>Login</h1>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required/>
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                        <button onClick={handleSubmit}>
                            Login
                        </button>
                    </form>
                    <a href="#">Forgot Password?</a>
                    
                </div>
            </div>
        </div>
    )
}


export default Login