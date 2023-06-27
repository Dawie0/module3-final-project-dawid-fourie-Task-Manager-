/* eslint react/prop-types: 0 */
import { useState } from 'react'
import MainWindow from './components/MainWindow'
import Login from './components/Login'

import './App.css'


function App() {
  const [user, setUser] = useState(false)

  const LoggedIn = () => {
    setUser(true)
  }

  return (
    user ? <MainWindow /> : <Login handleClick={LoggedIn}/> 
  )
}

export default App
