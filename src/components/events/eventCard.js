import React from "react"
import moment from "moment"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import eventCardStyles from "../../styles/components/events/eventCard.module.scss"

export default function EventCard({ data }) {
    const date = moment(data.dateAndTime)
    console.log(data.instagramUrl, data.facebookUrl)
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
                    {data.facebookUrl && (
                        <div className={eventCardStyles.facebook}>
                            <a href={data.facebookUrl} target="_blank" >
                                <FaFacebookF size="2em" />
                            </a>
                        </div>
                    )}
                    {data.instagramUrl && (
                        <div className={eventCardStyles.instagram}>
                            <a href={data.instagramUrl} target="_blank" >
                                <FaInstagram size="2em" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
