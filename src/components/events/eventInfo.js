import React, { useState } from "react"
import eventInfoStyles from "../../styles/components/events/eventInfo.module.scss"

export default function EventInfo() {
    const [selected, setSelected] = useState("weekly")

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

            <div className={eventInfoStyles.contentContainer}></div>
        </div>
    )
}
