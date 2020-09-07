import React, { useState } from "react"
import { Multiselect } from "multiselect-react-dropdown"

import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"

export default function UniversityPicker() {
    const [options] = useState([
        { name: "Online - open to all", id: 1 },
        { name: "Brunel", id: 2 },
        { name: "City", id: 3 },
        { name: "Imperial", id: 4 },
        { name: "KCL", id: 5 },
        { name: "Kingston", id: 6 },
        { name: "London Met", id: 7 },
        { name: "Queen Mary", id: 8 },
        { name: "Roehampton", id: 9 },
        { name: "SOAS", id: 10 },
        { name: "St George's", id: 11 },
        { name: "UCL", id: 12 },
        { name: "East London", id: 13 },
        { name: "Kent", id: 14 },
        { name: "Southampton", id: 15 },
        { name: "Hertfordshire", id: 16 },
        { name: "Cambridge", id: 17 },
        { name: "Oxford", id: 18 },
        { name: "Bristol", id: 19 },
        { name: "Reading", id: 20 },
        { name: "Warwick", id: 21 },
        { name: "DMU", id: 22 },
        { name: "Coventry", id: 23 },
        { name: "Aston", id: 24 },
        { name: "BCU", id: 25 },
        { name: "Birmingham", id: 26 },
        { name: "Loughborough", id: 27 },
        { name: "Nottingham", id: 28 },
        { name: "MMU", id: 29 },
        { name: "Glasgow", id: 30 },
        { name: "Edinburgh", id: 31 },
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
        <div className={eventCalendarStyles.universityContainer}>
            <h2>University</h2>
            <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={selectedValue} // Preselected value to persist in dropdown
                onSelect={onSelect} // Function will trigger on select event
                onRemove={onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                avoidHighlightFirstOption={true}
                hidePlaceholder={true}
                placeholder="All Universities"
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
