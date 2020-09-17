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
        { type: "Weekly", id: 1 },
        { type: "Flagship", id: 2 },
        { type: "Retreats", id: 3 },
    ])

    return (
        <div className={eventCalendarStyles.eventTypeContainer}>
            <h2>Event Type</h2>
            <Select
                options={options} // Options to display in the dropdown
                onSelect={onSelect} // Function will trigger on select event
                onRemove={onRemove} // Function will trigger on remove event
                displayValue="type" // Property name to display in the dropdown options
                avoidHighlightFirstOption={true}
                hidePlaceholder={true}
                placeholder="All Types"
                closeIcon="cancel"
                style={{
                    searchBox: {
                        // To change search box element look
                        "border-radius": "30px",
                        "border-color": "#A4A7B5",
                    },
                    inputField: {
                        // To change input field position or margin
                        margin: "6px",
                    },

                    option: {
                        // To change css for dropdown options
                        color: "black",
                    },
                }}
            />
        </div>
    )
}
