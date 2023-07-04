/* eslint react/prop-types: 0 */
import Clock from './Clock'
import Weather from './WeatherWidget'
import TaskListWidget from './TaskListWidget'
import './clockWidget.css'

const Widgets = () => {

    return (
        <div className="col-5 weather-widget">
            <div className="row8">
                <div className='clock-container'>
                    <Clock />
                    <Weather />
                </div>
            </div>
            <div className="row8">
                <TaskListWidget />
            </div>
        </div>
    )
}

export default Widgets