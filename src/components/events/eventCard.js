import React from "react"

import eventCardStyles from "../../styles/components/events/eventCard.module.scss"

export default function EventCard({ data }) {
    const colorCard = () => {
        if (data.slug === "weekly") return eventCardStyles.weekly
        if (data.slug === "flagship") return eventCardStyles.flagship
        if (data.slug === "retreat") return eventCardStyles.retreat
    }

    return (
        <div className={`${eventCardStyles.container} ${colorCard()}`}>
            {data.poster && (
                <img src={data.poster.resize.src} alt={data.poster.title} />
            )}
            <div className={eventCardStyles.content}>
                {data.name && (
                    <p className={eventCardStyles.title}>{data.name}</p>
                )}
                {data.speaker && <p>Speaker: {data.speaker}</p>}
                {data.dateAndTime && (
                    <p>Date: {data.dateAndTime.split("|")[1]}</p>
                )}
                {data.dateAndTime && (
                    <p>Time: {data.dateAndTime.split("|")[0]}</p>
                )}
                {data.location && <p>Location: {data.location}</p>}
            </div>
            <p className={eventCardStyles.metaInfo}>
                {data.slug}
                {data.university && ` - ${data.university}`}
            </p>
        </div>
    )
}
