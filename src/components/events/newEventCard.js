import React from "react"
import newEventCardStyles from "../../styles/components/events/newEventCard.module.scss"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import image from "../logo-dark.png"

export default function NewEventCard() {
    return (
        <div
            className={`${newEventCardStyles.card} ${newEventCardStyles.textCenter}`}
        >
            <div className={newEventCardStyles.overflow}>
                <img src={image} alt="test image" />
            </div>
            <div
                className={`${newEventCardStyles.cardBody} ${newEventCardStyles.textDark}`}
            >
                <h4 className={newEventCardStyles.cardTitle}>Card Title</h4>
            </div>
        </div>
    )
}
