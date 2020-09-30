import React, { useState } from "react"
// import BackgroundImageOnLoad from "background-image-on-load"
// import RingLoader from "react-spinners/RingLoader"
import Header from "../components/header"
import FadeIn from "../components/fadeIn"
import Fade from "react-reveal/Fade"
import EventInfo from "../components/events/eventInfo"
import EventCalendar from "../components/events/eventCalendar"
import loadingStyles from "../styles/loading.module.scss"

export default function Events() {
    const [weeklyLoaded, setWeeklyLoaded] = useState(false)
    const [flagshipLoaded, setFlagshipLoaded] = useState(false)
    const [retreatsloaded, setRetreatsLoaded] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)

    const loadPage = () =>
        setTimeout(() => {
            setWeeklyLoaded(true)
            setFlagshipLoaded(true)
            setRetreatsLoaded(true)
            setFadeOut(true)
        }, 5000)

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
            <h1>Loading...</h1>
            {loadPage()}
        </div>
    )
}


// <BackgroundImageOnLoad
// src={"/weekly.png"}
// onLoadBg={() => setWeeklyLoaded(true)}
// onError={err => console.log("Error: ", err)}
// />
// <BackgroundImageOnLoad
// src={"/flagship.jpg"}
// onLoadBg={() => setFlagshipLoaded(true)}
// onError={err => console.log("Error: ", err)}
// />
// <BackgroundImageOnLoad
// src={"/retreats.png"}
// onLoadBg={() => {
//     setTimeout(() => {
//         setRetreatsLoaded(true)
//     }, 5000)
// }}
// onError={err => console.log("Error: ", err)}
// />


// <RingLoader
// size={60}
// color={"#9113FE"}
// loading={!(weeklyLoaded && flagshipLoaded && retreatsloaded)}
// />