/* eslint react/prop-types: 0 */
import { useContext } from "react"
import Calendar from "./Calendar"
import Widgets from "./ClockWidget"
import { TaskIndexContext } from "../contexts/TaskIndexContext"


const WidgetContainer = () => {

    const { tasks } = useContext(TaskIndexContext)
    return (
    <div className='row3 widget-container'>
        <Calendar tasks={tasks}/>
        <Widgets />
    </div>
    )
}

export default WidgetContainer