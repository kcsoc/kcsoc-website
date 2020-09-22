import React, { useState, useContext } from "react"
import Select from "react-select"
import EventContext from "../contexts/eventContext"

import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"

export default function EventTypePicker() {
    const { setEventTypes } = useContext(EventContext)

    const onSelect = (selectedList, selectedItem) => {
        setEventTypes([...selectedList])
    }

    const onRemove = (selectedList, removedItem) => {
        setEventTypes([...selectedList])
    }

    const [options] = useState([
        { label: "Weekly", value: 1 },
        { label: "Flagship", value: 2 },
        { label: "Retreats", value: 3 },
    ])

    return (
        <div className={eventCalendarStyles.eventTypeContainer}>
            <h2>Event Type</h2>
            <Select
                options={options} // Options to display in the dropdown
                onChange={newValue => {
                    if (!newValue) {
                        setEventTypes([])
                    } else {
                        setEventTypes(newValue)
                    }
                }}
                isMulti
                onSelect={onSelect} // Function will trigger on select event
                onRemove={onRemove} // Function will trigger on remove event
                placeholder="All Types"
                className={eventCalendarStyles.multiSelect}
            />
        </div>
    )
}
