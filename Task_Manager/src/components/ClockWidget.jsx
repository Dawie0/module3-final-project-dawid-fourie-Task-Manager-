/* eslint react/prop-types: 0 */
import Clock from './Clock'
import Weather from './WeatherWidget'
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
                Weather
            </div>
        </div>
    )
}

export default Widgets