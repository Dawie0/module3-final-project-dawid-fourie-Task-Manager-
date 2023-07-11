/* eslint react/prop-types: 0 */
import { useState, useEffect } from "react"

import Popover from "./Popover"
import './calendar.css'

const Calendar = ({ tasks }) => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [calendarData, setCalendarData] = useState([])
    const [hoveredDay, setHoveredDay] = useState(null)
    const [publicHolidays, setPublicHolidays] = useState([])

    useEffect(() => {
        generateCalendarData()
        fetchPublicHolidays(2023)
            .then((holidays) => {
                setPublicHolidays(holidays)
            })
            .catch((error) => {
                console.error('Failed to fetch public holidays', error)
    })
    }, [])

    const fetchPublicHolidays = async (year) => {
        const countryCode = 'US'
        const response = await fetch(`https://date.nager.at/Api/v2/PublicHolidays/${year}/${countryCode}`)
        const holidays = await response.json()
        return holidays
    }

    

    const generateCalendarData = () => {
        const currentYear = currentDate.getFullYear()
        const currentMonth = currentDate.getMonth()
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
        const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

        const calendarArray = []

        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarArray.push(null)
        }

        for (let i = 1; i <= totalDaysInMonth; i++) {
            calendarArray.push(new Date(currentYear, currentMonth, i))
        }

        setCalendarData(calendarArray)
    }

    const isToday = (date) => {
        const today = new Date()
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        )
    }

    const isTaskDueDate = (date) => {
        if (date === null) {
            return false
        }

        const currentDateUTC = new Date(
          date.getUTCFullYear(),
          date.getUTCMonth(),
          date.getUTCDate()
        );

        return tasks.some((task) => {
            const taskDate = new Date(task.dueDate);
            const taskDateUTC = new Date(
              taskDate.getUTCFullYear(),
              taskDate.getUTCMonth(),
              taskDate.getUTCDate()
            )
        
            return (
              taskDateUTC.getTime() === currentDateUTC.getTime()
            )
        });
    }

    const handleDayHover = (date) => {
        setHoveredDay(date)
    }

    
    const getTasksForDate = (date) => {
        if (date === null) {
          return [];
        }
      
        const formattedDate = date.toISOString().split('T')[0];
      
        const tasksForDate = tasks.filter((task) => {
          const taskDate = task.dueDate.split('T')[0];
          return taskDate === formattedDate;
        });
      
      
        return tasksForDate;
    }

    const isHoliday = (date) => {
        // Check if the date is a public holiday
        return publicHolidays.some((holiday) => {
          const holidayDate = new Date(holiday.date);
          return isSameDay(date, holidayDate);
        });
      };
    
    const isSameDay = (date1, date2) => {
        const date1UTC = new Date(
            date1.getUTCFullYear(),
            date1.getUTCMonth(),
            date1.getUTCDate()
        )
        const date2UTC = new Date(
            date2.getUTCFullYear(),
            date2.getUTCMonth(),
            date2.getUTCDate()
        )
        return (
          date1UTC.getTime() === date2UTC.getTime()
        );
    };

    const getHolidayForDate = (date) => {
        return publicHolidays.find((holiday) => isSameDay(date, new Date(holiday.date)));
      };


    return (
        <div className="col-7 calendar">
            <div className="calendar-widget">
                <div className="calendar-header">
                    <h6>{currentDate.toLocaleString('default', {month: 'long', year:'numeric'})}</h6>
                </div>
                <div className="calendar-grid">
                    <div className="day-of-week">Sun</div>
                    <div className="day-of-week">Mon</div>
                    <div className="day-of-week">Tue</div>
                    <div className="day-of-week">Wed</div>
                    <div className="day-of-week">Thu</div>
                    <div className="day-of-week">Fri</div>
                    <div className="day-of-week">Sat</div>
                    {calendarData.map((date, index) => {
                        const isPastDate = date && date < new Date().setHours(0, 0, 0, 0)
                        const hasTaskDue = isTaskDueDate(date)
                        const isPastDateWithTaskDue = isPastDate && hasTaskDue
                        return (
                        <div
                            key={index}
                            className={`calendar-cell ${date ? 'active' : ''} ${date && isToday(date) ? 'today' : ''} 
                                ${date && isTaskDueDate(date) ? 'task-due' : ''} ${isPastDate ? 'past-date' : ''} 
                                ${isPastDateWithTaskDue ? 'past-date-with-task' : ''} ${date && isHoliday(date) ? 'holiday' : ''}`}
                            onMouseEnter={() => handleDayHover(date)}
                            onMouseLeave={() => handleDayHover(null)}
                        >
                            {date && hoveredDay === date && (isHoliday(date) || isTaskDueDate(date)) && (
                                <Popover
                                    tasks={getTasksForDate(date)}
                                    holiday={getHolidayForDate(date)}
                                />
                            )}
                            {date && <span className="calendar-date">{date.getDate()}</span>}
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Calendar