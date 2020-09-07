import React, { useState } from "react"
import eventInfoStyles from "../../styles/components/events/eventInfo.module.scss"

export default function EventInfo() {
    const [selected, setSelected] = useState("weekly")

    const renderBackground = () => {
        switch (selected) {
            case "weekly":
                return `${eventInfoStyles.contentContainer} ${eventInfoStyles.weekly} `
            case "flagship":
                return `${eventInfoStyles.contentContainer} ${eventInfoStyles.flagship}`
            case "retreats":
                return `${eventInfoStyles.contentContainer} ${eventInfoStyles.retreats}`
            default:
                return eventInfoStyles.transparent
        }
    }

    const renderContent = () => {
        switch (selected) {
            case "weekly":
                return (
                    <p>
                        Our weekly events provide a place for students and
                        faculty members alike to connect to themselves and other
                        like minded individuals in a safe, light hearted
                        environment where they can detach themselves from any
                        external worries and stress and learn more about ways in
                        which they can live a more driven and fulfilling
                        lifestyle.
                    </p>
                )
            case "flagship":
                return <p>Information on Flagship events go here</p>
            case "retreats":
                return <p>Information on Retreats!</p>
            default:
                return "Error invalid 'selected' variable"
        }
    }

    return (
        <div className={eventInfoStyles.outerContainer}>
            <div className={eventInfoStyles.menu}>
                <div
                    className={
                        selected === "weekly" ? eventInfoStyles.underlined : ""
                    }
                    onClick={() => {
                        setSelected("weekly")
                    }}
                >
                    <h2>Weekly Events</h2>
                </div>

                <div
                    className={
                        selected === "flagship"
                            ? eventInfoStyles.underlined
                            : ""
                    }
                    onClick={() => {
                        setSelected("flagship")
                    }}
                >
                    <h2> Flagship Events</h2>
                </div>

                <div
                    className={
                        selected === "retreats"
                            ? eventInfoStyles.underlined
                            : ""
                    }
                    onClick={() => {
                        setSelected("retreats")
                    }}
                >
                    <h2>Retreats</h2>
                </div>
            </div>

            <div className={renderBackground()}>
                <div className={eventInfoStyles.content}>{renderContent()}</div>
            </div>
        </div>
    )
}
