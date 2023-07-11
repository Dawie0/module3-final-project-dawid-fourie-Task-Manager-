/* eslint react/prop-types: 0 */
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainWindow from './components/MainWindow'
import Login from './components/Login'
import Register from './components/Register'
import UserInfo from './components/UserInfo'
import './App.css'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainWindow />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/user-info' element={<UserInfo />}/>
      </Routes>
    </Router>
  )
}
export default App

// user ? <MainWindow /> : <Login handleClick={LoggedIn}/> 

{/* <Router>
      <Switch>
        <Route exact path='/' Component={MainWindow}/>
        <Route path='/login' component={Login}/>
        <Route path='/create' Component={CreateTask}/>
      </Switch>
    </Router> */}

  //   const [login, setLogin] = useState(false)

  // const LoggedIn = () => {
  //   setLogin(true)
  // }

  // return (
  //   login ? <MainWindow /> : <LoginContainer handleClick={LoggedIn}/>
  // )
