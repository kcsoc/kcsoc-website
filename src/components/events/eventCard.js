import React from "react"
import moment from "moment"
import eventCardStyles from "../../styles/components/events/eventCard.module.scss"

export default function EventCard({ data }) {
    const colorCard = () => {
        if (data.type === "weekly") return eventCardStyles.weekly
        if (data.type === "flagship") return eventCardStyles.flagship
        if (data.type === "retreat") return eventCardStyles.retreat
    }

    const date = moment(data.dateAndTime)

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
                    <p>Date: {date.format("Do MMMM YYYY")}</p>
                )}
                {data.dateAndTime && (
                    <p>Time: {date.format("h:mm a")}</p>
                )}
                {data.location && <p>Location: {data.location}</p>}
            </div>
            <p className={eventCardStyles.metaInfo}>
                {data.type}
                {data.university && ` - ${data.university}`}
            </p>
        </div>
    )
}
