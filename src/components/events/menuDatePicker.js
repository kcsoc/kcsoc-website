import React, { useContext } from "react"
import { DatePicker } from "react-rainbow-components"
import EventContext from "../contexts/eventContext"

import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"

export default function MenuDatePicker({ type }) {
    const { startDate, setStartDate, endDate, setEndDate } = useContext(
        EventContext
    )

    return (
        <div className={eventCalendarStyles.datePickerContainer}>
            <h2>{type === "start" ? "Start Date" : "End Date"}</h2>
            <div className={eventCalendarStyles.datePicker}>
                <DatePicker
                    value={type === "start" ? startDate : endDate}
                    onChange={value => {
                        if (type === "start") {
                            setStartDate(value)
                        } else {
                            value.setHours(value.getHours() + 23)
                            value.setMinutes(value.getMinutes() + 59)
                            setEndDate(value)
                        }
                    }}
                    formatStyle="large"
                    locale="en-GB"
                />
            </div>
        </div>
    )
}
