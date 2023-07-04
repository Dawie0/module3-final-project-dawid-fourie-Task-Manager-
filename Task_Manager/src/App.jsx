/* eslint react/prop-types: 0 */
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainWindow from './components/MainWindow'
import Login from './components/Login'
import CreateTask from './components/CreateTask'
import './App.css'



function App() {
  const [user, setUser] = useState(false)

  const LoggedIn = () => {
    setUser(true)
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/' Component={MainWindow}/>
        <Route path='/login' component={Login}/>
        <Route path='/create' Component={CreateTask}/>
      </Switch>
    </Router>
  )
}

export default App

// user ? <MainWindow /> : <Login handleClick={LoggedIn}/> 
