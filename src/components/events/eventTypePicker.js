import React, { useState } from "react"
import { Multiselect } from "multiselect-react-dropdown"

import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"

export default function EventTypePicker() {
    const [options] = useState([
        { type: "Weekly", id: 1 },
        { type: "Flagship", id: 2 },
        { type: "Retreats", id: 3 },
    ])

    const [selectedValue] = useState({})

    const onSelect = (selectedList, selectedItem) => {
        console.log("onSelect")
        console.log(selectedList)
        console.log(selectedItem)
    }

    const onRemove = (selectedList, removedItem) => {
        console.log("onRemove")
        console.log(selectedList)
        console.log(removedItem)
    }

    return (
        <div className={eventCalendarStyles.eventTypeContainer}>
            <h2>Event Type</h2>
            <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={selectedValue} // Preselected value to persist in dropdown
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
                        "border-radius": "10px",
                    },
                    inputField: {
                        // To change input field position or margin
                        margin: "10px",
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
