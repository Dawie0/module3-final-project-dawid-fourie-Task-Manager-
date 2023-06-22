/* eslint react/prop-types: 0 */
import { useContext } from 'react'
import DarkModeButton from './components/DarkModeButton'
import { ThemeContext } from './contexts/ThemeContext'
import UserInfo from './components/UserInfoTab'
import TaskListContainer from './components/TaskListContainer'
import TaskInfoContainer from './components/TaskInfoContainer'
import WidgetContainer from './components/WidgetContainer'
import './App.css'


function App() {
  const { theme } = useContext(ThemeContext)
  

  return (
      <div className='App' id={theme} >
        <div className='container-fluid'>
          <div className='row'>
            {/* Left Side */}
            <div className='col-5'>
              {/* User Info */}
                <UserInfo />
              
              {/* Task List */}
              <TaskListContainer />

            </div>

            {/* Right Side */}
            <div className='col-7'>
              {/* Task Details */}
              <TaskInfoContainer />
              {/* Widgets */}
              <WidgetContainer />

            </div>
          </div>
        </div>
        <DarkModeButton />
      </div>
  )
}

export default App
