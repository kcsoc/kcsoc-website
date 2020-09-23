import React, { useContext } from "react"
import Select from "react-select"
import EventContext from "../contexts/eventContext"

import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"

export default function UniversityPicker() {
    const { setUniversities } = useContext(EventContext)

    const onChange = selectedList => {
        try {
            setUniversities([...selectedList])
        } catch (error) {
            setUniversities([])
        }
    }

    const options = [
        { label: "Online - open to all", value: 1 },
        { label: "Brunel", value: 2 },
        { label: "City", value: 3 },
        { label: "Imperial", value: 4 },
        { label: "KCL", value: 5 },
        { label: "Kingston", value: 6 },
        { label: "London Met", value: 7 },
        { label: "Queen Mary", value: 8 },
        { label: "Roehampton", value: 9 },
        { label: "SOAS", value: 10 },
        { label: "St George's", value: 11 },
        { label: "UCL", value: 12 },
        { label: "East London", value: 13 },
        { label: "Kent", value: 14 },
        { label: "Southampton", value: 15 },
        { label: "Hertfordshire", value: 16 },
        { label: "Cambridge", value: 17 },
        { label: "Oxford", value: 18 },
        { label: "Bristol", value: 19 },
        { label: "Reading", value: 20 },
        { label: "Warwick", value: 21 },
        { label: "DMU", value: 22 },
        { label: "Coventry", value: 23 },
        { label: "Aston", value: 24 },
        { label: "BCU", value: 25 },
        { label: "Birmingham", value: 26 },
        { label: "Loughborough", value: 27 },
        { label: "Nottingham", value: 28 },
        { label: "MMU", value: 29 },
        { label: "Glasgow", value: 30 },
        { label: "Edinburgh", value: 31 },
    ]

    return (
        <div className={eventCalendarStyles.universityContainer}>
            <h2>University</h2>
            <Select
                options={options}
                onChange={onChange}
                isMulti
                placeholder="All Universities"
                className={eventCalendarStyles.select}
            />
        </div>
    )
}
