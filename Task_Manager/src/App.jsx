/* eslint react/prop-types: 0 */
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