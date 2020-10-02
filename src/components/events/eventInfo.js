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
                        Join our weekly events at KCSOCs around the country to
                        learn more about the ancient philosophy and tradition of
                        spirituality. Enjoy delicious free sanctified vegetarian
                        food (made with love) and connect with like-minded
                        individuals.
                    </p>
                )
            case "flagship":
                return (
                    <p>
                        Dive deeper with our flagship events where hundreds of
                        spiritual seekers are brought together. Listen to the
                        wisdom and advice of globally renowned spiritual gurus
                        who have been practising for multiple decades and take
                        an opportunity to ask your own penetrating questions.
                    </p>
                )
            case "retreats":
                return (
                    <p>
                        Immerse yourself in the complete holistic spritual
                        experience. Listen to philosophy from monks and spritual
                        practioners at Bhaktivedanta Manor near London. Connect
                        to nature and feed the cows at the sanctuary, stretch
                        out and relax during our in-house yoga sessions or learn
                        the ancient wisdom of Ayurveda in our cooking classes.
                        To finish it off, enjoy an ecstatic kirtan experience.
                    </p>
                )
            default:
                return "Error invalid 'selected' variable"
        }
    }

    return (
        <div className={eventInfoStyles.outerContainer}>
            <div className={eventInfoStyles.menu}>
                <button
                    className={
                        selected === "weekly" ? eventInfoStyles.underlined : ""
                    }
                    onClick={() => {
                        setSelected("weekly")
                    }}
                >
                    <h2>Weekly Events</h2>
                </button>

                <button
                    className=
                    {selected === "flagship" ? eventInfoStyles.underlined : ""}
                    onClick=
                    {() => {
                        setSelected("flagship")
                    }}
                    ><h2> Flagship Events</h2>
                </button>

                <button
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
                </button>
            </div>

            <div className={renderBackground()}>
                <div className={eventInfoStyles.content}>{renderContent()}</div>
            </div>
        </div>
    )
}
