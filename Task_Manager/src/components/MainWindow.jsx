/* eslint react/prop-types: 0 */

import { useContext } from 'react'
import DarkModeButton from './DarkModeButton'
import { ThemeContext } from '../contexts/ThemeContext'
import UserInfo from './UserInfoTab'
import TaskListContainer from './TaskListContainer'
import TaskInfoContainer from './TaskInfoContainer'
import WidgetContainer from './WidgetContainer'
import '../App.css'


const MainWindow = () => {
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
        </div>
    )
  }
  
  export default MainWindow