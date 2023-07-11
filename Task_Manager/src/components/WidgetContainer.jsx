/* eslint react/prop-types: 0 */
import { useContext } from "react"
import Calendar from "./Calendar"
import Widgets from "./ClockWidget"
import { ValidUserContext } from "../contexts/UserContext"


const WidgetContainer = () => {
    const { currentUser } = useContext(ValidUserContext)
    
    if (currentUser && currentUser.tasks) {
        return (
            <div className='row3 widget-container'>
                <Calendar tasks={currentUser.tasks}/>
                <Widgets />
            </div>
            )
    }
    else {
        return (
            <div className='row3 widget-container'>
                <Calendar tasks={[]}/>
                <Widgets />
            </div>
            )
    }
    
}

export default WidgetContainer