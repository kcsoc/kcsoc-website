import React from "react"
import moment from "moment"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import eventCardStyles from "../../styles/components/events/eventCard.module.scss"

export default function EventCard({ data }) {
    const date = moment(data.dateAndTime)

    return (
        <div className={eventCardStyles.card}>
            <div className={eventCardStyles.image}>
                {data.poster && (
                    <img src={data.poster.resize.src} alt={data.poster.title} />
                )}
            </div>
            <div className={eventCardStyles.content}>
                {data.name && (
                    <h2 className={eventCardStyles.title}>{data.name}</h2>
                )}
                {data.university && (
                    <p className={eventCardStyles.university}>
                        {data.university}
                    </p>
                )}

                {data.dateAndTime && (
                    <p>{date.format("Do MMMM YYYY - h:mm a")}</p>
                )}
                {data.speaker && <p>Speaker: {data.speaker}</p>}

                {data.location && <p>Location: {data.location}</p>}

                <div className={eventCardStyles.icons}>
                    <div className={eventCardStyles.facebook}>
                        <FaFacebookF size="2em" />
                    </div>
                    <div className={eventCardStyles.instagram}>
                        <FaInstagram size="2em" />
                    </div>
                </div>
            </div>
        </div>
    )
}
