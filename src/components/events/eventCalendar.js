import React, { useState } from "react"
import CalendarMenu from "./calendarMenu"
import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"

export default function EventCalendar() {
    return (
        <div className={eventCalendarStyles.outerContainer}>
            <h1>Calendar</h1>
            <CalendarMenu />
        </div>
    )
}
