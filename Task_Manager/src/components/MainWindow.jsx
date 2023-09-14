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
    const { currUserData, taskSelected } = useContext(ValidUserContext)
    
    const navigate = useNavigate()

    useEffect(() => {
      if (!currUserData) {
        navigate('/login')
      }
      else if (
        currUserData && 
        (!currUserData.user_details?.organization || 
          !currUserData.user_details?.position || 
          !currUserData.user_details?.positionType)
      ) {
        navigate('/user-info')
      }
    }, [currUserData, navigate])

    return (
        <div className='App' id={theme} >
          <div className='container-fluid'>
            <div className='row'>
              
              {/* Left Side */}
              <div className={`col-sm-12 col-lg-5 ${taskSelected ? 'd-none d-lg-block' : ''}`}>
                {/* User Info */}
                <div>
                  <UserInfoTab/>
                </div>
                  
                {/* Task List */}
                <TaskListContainer />
  
              </div>
  
              {/* Right Side */}
              <div className={`col-sm-12 col-lg-7 ${taskSelected ? '' : 'd-none d-lg-block'}`}>
                {/* Task Details */}
                <TaskInfoContainer />
                {/* Widgets */}
                <div className='col-lg-12 d-none d-lg-block'>
                  <WidgetContainer/>
                </div>
                
  
              </div>
            </div>
          </div>
        </div>
    )
  }
  
  export default MainWindow