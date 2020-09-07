import React, { useState } from "react"
import CalendarMenu from "./calendarMenu"
import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"
import EventContext from "../contexts/eventContext"
import EventCard from "./eventCard"

export default function EventCalendar() {
    const [universities, setUniversities] = useState([])
    const [eventTypes, setEventTypes] = useState([])
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState()

    const eventData = [
        {
            id: 0,
            name: "24 Hours to Live",
            speaker: "Bhuta Bhavana Das",
            university: "Cambridge",
            location: "King's College",
            time: "7 pm",
        },
    ]

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
                <h1 className={eventCalendarStyles.title}>Calendar</h1>
                <CalendarMenu />
                <div className={eventCalendarStyles.contentContainer}>
                    <EventCard />
                    <EventCard />

                    <EventCard />
                    

                    <EventCard />
                    <EventCard />

                    <EventCard />

                    </div>
            </div>
        </EventContext.Provider>
    )
}
