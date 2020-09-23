import React, { useState, useContext } from "react"
import Select from "react-select"
import EventContext from "../contexts/eventContext"

import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"

export default function EventTypePicker() {
    const { setEventTypes } = useContext(EventContext)

    const onChange = selectedList => {
        try {
            setEventTypes([...selectedList])
        } catch (error) {
            setEventTypes([])
        }
    }

    const options = [
        { label: "Weekly", value: 1 },
        { label: "Flagship", value: 2 },
        { label: "Retreats", value: 3 },
    ]

    return (
        <div className={eventCalendarStyles.eventTypeContainer}>
            <h2>Event Type</h2>
            <Select
                options={options}
                onChange={onChange}
                className={eventCalendarStyles.select}
                isMulti
                placeholder="All Types"
            />
        </div>
    )
}
