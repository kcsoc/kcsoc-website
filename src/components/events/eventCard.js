import React from "react"

import eventCardStyles from "../../styles/components/events/eventCard.module.scss"

export default function EventCard() {
    return (
        <div className={eventCardStyles.container}>
            <img src="/event-poster.jpeg" alt="event-image" />
        </div>
    )
}
