import React from "react"

import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"

export default function EventCalendar() {
    return (
        <div className={eventCalendarStyles.outerContainer}>
            <h1>Calendar</h1>

            <div className={eventCalendarStyles.menuContainer}>
                <h2>i3ji</h2>
            </div>
        </div>
    )
}
