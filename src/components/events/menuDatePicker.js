import React, { useState } from "react"
import { Picklist, PicklistOption, DatePicker } from "react-rainbow-components"

import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"

export default function MenuDatePicker({ title }) {
    const [date, setDate] = useState()
    const [transparent, setTransparent] = useState(false)

    const clear = () => {
        setTransparent(true)
        setDate(undefined)
        setTimeout(() => {
            setTransparent(false)
        }, 100)
    }

    return (
        <div className={eventCalendarStyles.datePickerContainer}>
            <h2>{title}</h2>
            <div className={eventCalendarStyles.datePicker}>
                <DatePicker
                    value={date}
                    onChange={value => setDate(value)}
                    formatStyle="large"
                    locale="en-GB"
                />
                <p
                    className={
                        transparent ? eventCalendarStyles.transparent : ""
                    }
                    onClick={clear}
                >
                    &#10005;
                </p>
            </div>
        </div>
    )
}
