/* eslint react/prop-types: 0 */
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { ValidUserContext } from '../contexts/UserContext'
import UserInfoTab from './UserInfoTab'
import TaskListContainer from './TaskListContainer'
import TaskInfoContainer from './TaskInfoContainer'
import WidgetContainer from './WidgetContainer'
import '../App.css'


const MainWindow = () => {
    const { theme } = useContext(ThemeContext)
    const { currentUser } = useContext(ValidUserContext)
    const navigate = useNavigate()

    useEffect(() => {
      if (!currentUser) {
        navigate('/login')
      }
      else if (currentUser && !currentUser.organization && !currentUser.position) {
        navigate('/user-info')
      }
    }, [currentUser, navigate])

    if (!currentUser) {
      return null
    }

    const logout =() => {
      navigate('/login')
    }
    return (
        <div className='App' id={theme} >
          <div className='container-fluid'>
            <div className='row'>
              {/* Left Side */}
              <div className='col-5'>
                {/* User Info */}
                  <UserInfoTab logout={logout}/>
                
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