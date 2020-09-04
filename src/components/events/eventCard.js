import React from "react"
import Fade from "react-reveal/Fade"

import eventCardStyles from "../../styles/components/events/eventCard.module.scss"

export default function EventCard({ data }) {
    const colorCard = () => {
        if (data.type === "weekly") return eventCardStyles.weekly
        if (data.type === "flagship") return eventCardStyles.flagship
        if (data.type === "retreat") return eventCardStyles.retreat
    }

    return (
        <Fade>
            <div className={`${eventCardStyles.container} ${colorCard()}`}>
                {data.imageURL && <img src={data.imageURL} alt="event-image" />}
                <div className={eventCardStyles.content}>
                    {data.name && (
                        <p className={eventCardStyles.title}>{data.name}</p>
                    )}
                    {data.speaker && <p>Speaker: {data.speaker}</p>}
                    {data.date && <p>Date: {data.date}</p>}
                    {data.time && <p>Time: {data.time}</p>}
                    {data.location && <p>Location: {data.location}</p>}
                </div>
                <p className={eventCardStyles.metaInfo}>
                    {data.type}
                    {data.university && ` - ${data.university}`}
                </p>
            </div>
        </Fade>
    )
}
