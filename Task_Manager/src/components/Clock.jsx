/* eslint react/prop-types: 0 */
import { useState, useEffect } from "react"

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(getFormattedTime())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getFormattedTime)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    function getFormattedTime() {
        const now = new Date()
        const hours = now.getHours()
        const minutes = String(now.getMinutes()).padStart(2, '0')
        const ampm = hours >=12 ? 'PM' : 'AM'
        const formattedHours = hours % 12 || 12
        return `${formattedHours}:${minutes} ${ampm}`
    }
    
    return (
        <div className="clock-time">
            {currentTime}
        </div>
    )
}

export default Clock