import React from "react"
import eventInfoStyles from "../../styles/components/events/eventInfo.module.scss"

export default function EventInfo() {
    return (
        <div className={eventInfoStyles.outerContainer}>
            <div className={eventInfoStyles.menu}>
                <h2 className={eventInfoStyles.underlined}>Weekly Events</h2>

                <h2>Flagship Events</h2>

                <h2>Retreats</h2>
            </div>

            <div className={eventInfoStyles.contentContainer}></div>
        </div>
    )
}
