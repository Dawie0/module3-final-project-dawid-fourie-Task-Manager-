/* eslint react/prop-types: 0 */
import Calendar from "./Calendar"
import WeatherWidget from "./WeatherWidget"

const WidgetContainer = () => {
    return (
    <div className='row3 widget-container'>
        <Calendar />
        <WeatherWidget />
    </div>
    )
}

export default WidgetContainer