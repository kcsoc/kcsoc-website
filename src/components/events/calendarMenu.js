import React from "react"
import UniversityPicker from "./universityPicker"
import EventTypePicker from "./eventTypePicker"

import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"

export default function CalendarMenu() {
    return (
        <div className={eventCalendarStyles.menuContainer}>
            <UniversityPicker />
            <EventTypePicker /> <EventTypePicker />
        </div>
    )
}
