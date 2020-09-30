import React, { useState } from "react"
import BackgroundImageOnLoad from "background-image-on-load"
import Header from "../components/header"
import FadeIn from "../components/fadeIn"
import Fade from "react-reveal/Fade"
import EventInfo from "../components/events/eventInfo"
import EventCalendar from "../components/events/eventCalendar"

export default function Events() {
    const [weeklyLoaded, setWeeklyLoaded] = useState(false)
    const [flagshipLoaded, setFlagshipLoaded] = useState(false)
    const [retreatsloaded, setRetreatsLoaded] = useState(false)

    console.log(weeklyLoaded)

    console.log(weeklyLoaded && flagshipLoaded && retreatsloaded)

    return weeklyLoaded && flagshipLoaded && retreatsloaded ? (
        <FadeIn>
            <Header isOpaque={true} dark={true} />

            <Fade>
                <EventInfo />
            </Fade>
            <Fade>
                <EventCalendar />
            </Fade>
        </FadeIn>
    ) : (
        <div>
            <BackgroundImageOnLoad
                src={"/weekly.png"}
                onLoadBg={() => setWeeklyLoaded(true)}
                onError={err => console.log("Error: ", err)}
            />
            <BackgroundImageOnLoad
                src={"/flagship.jpg"}
                onLoadBg={() => setFlagshipLoaded(true)}
                onError={err => console.log("Error: ", err)}
            />
            <BackgroundImageOnLoad
                src={"/retreats.png"}
                onLoadBg={() => setRetreatsLoaded(true)}
                onError={err => console.log("Error: ", err)}
            />

            <h1>Images are loading...</h1>
        </div>
    )
}
