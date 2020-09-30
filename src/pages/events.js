import React, { useState } from "react"
import loadable from "@loadable/component"
import RingLoader from "react-spinners/RingLoader"
import Header from "../components/header"
import FadeIn from "../components/fadeIn"
import Fade from "react-reveal/Fade"
import EventInfo from "../components/events/eventInfo"
import EventCalendar from "../components/events/eventCalendar"
import loadingStyles from "../styles/loading.module.scss"

const BackgroundImageOnLoad = loadable(
    () => import("background-image-on-load"),
    { ssr: false }
)

export default function Events() {
    const [weeklyLoaded, setWeeklyLoaded] = useState(false)
    const [flagshipLoaded, setFlagshipLoaded] = useState(false)
    const [retreatsloaded, setRetreatsLoaded] = useState(false)

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
        <div className={loadingStyles.container}>
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

            <RingLoader
                size={60}
                color={"#9113FE"}
                loading={!(weeklyLoaded && flagshipLoaded && retreatsloaded)}
            />
        </div>
    )
}
