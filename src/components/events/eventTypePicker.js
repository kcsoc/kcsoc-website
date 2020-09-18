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
        { value: "Weekly", label: "Weekly", },
        { value: "Flagship", label: "Flagship", },
        { value: "Retreats", label: "Retreats", },
    ]

    return (
        <div className={eventCalendarStyles.eventTypeContainer}>
            <h2>Event Type</h2>
            <Select
                options={options}
                onChange={onChange}
                isMulti
                placeholder="All"
                className={eventCalendarStyles.select}
            />
        </div>
    )
}
