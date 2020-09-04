import React, { useState } from "react"
import CalendarMenu from "./calendarMenu"
import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"
import EventContext from "../contexts/eventContext"

export default function EventCalendar() {
    const [universities, setUniversities] = useState([])
    const [eventTypes, setEventTypes] = useState([])
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState()

    return (
        <EventContext.Provider
            value={{
                universities,
                setUniversities,
                eventTypes,
                setEventTypes,
                startDate,
                setStartDate,
                endDate,
                setEndDate,
            }}
        >
            <div className={eventCalendarStyles.outerContainer}>
                <h1>Calendar</h1>
                <CalendarMenu />

                {universities.map((university, index) => (
                    <h2 key={index}>{university.name}</h2>
                ))}
            </div>
        </EventContext.Provider>
    )
}
