import React, { useState, useContext } from "react"
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
        { value: "Online - open to all", label: "Online - open to all" },
        { value: "Brunel", label: "Brunel" },
        { value: "City", label: "City" },
        { value: "Imperial", label: "Imperial" },
        { value: "KCL", label: "KCL" },
        { value: "Kingston", label: "Kingston" },
        { value: "London Met", label: "London Met" },
        { value: "Queen Mary", label: "Queen Mary" },
        { value: "Roehampton", label: "Roehampton" },
        { value: "SOAS", label: "SOAS" },
        { value: "St George's", label: "St George's" },
        { value: "UCL", label: "UCL" },
        { value: "East London", label: "East London" },
        { value: "Kent", label: "Kent" },
        { value: "Southampton", label: "Southampton" },
        { value: "Hertfordshire", label: "Hertfordshire" },
        { value: "Cambridge", label: "Cambridge" },
        { value: "Oxford", label: "Oxford" },
        { value: "Bristol", label: "Bristol" },
        { value: "Reading", label: "Reading" },
        { value: "Warwick", label: "Warwick" },
        { value: "DMU", label: "DMU" },
        { value: "Coventry", label: "Coventry" },
        { value: "Aston", label: "Aston" },
        { value: "BCU", label: "BCU" },
        { value: "Birmingham", label: "Birmingham" },
        { value: "Loughborough", label: "Loughborough" },
        { value: "Nottingham", label: "Nottingham" },
        { value: "MMU", label: "MMU" },
        { value: "Glasgow", label: "Glasgow" },
        { value: "Edinburgh", label: "Edinburgh" },
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
