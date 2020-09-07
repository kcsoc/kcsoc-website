import React from "react"
import Header from "../components/header"
import FadeIn from "../components/fadeIn"
import Fade from "react-reveal/Fade"
import EventInfo from "../components/events/eventInfo"

export default function Events() {
    return (
        <FadeIn>
            <Header isOpaque={true} dark={true} />
            <Fade>
                <EventInfo />
            </Fade>
        </FadeIn>
    )
}
