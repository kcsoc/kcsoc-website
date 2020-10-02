import React, { useState } from "react"
import loadable from "@loadable/component"
import RingLoader from "react-spinners/RingLoader"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import FadeIn from "../components/fadeIn"
import Fade from "react-reveal/Fade"
import EventInfo from "../components/events/eventInfo"
import EventCalendar from "../components/events/eventCalendar"
import loadingStyles from "../styles/loading.module.scss"
import Layout from "../components/layout"

const BackgroundImageOnLoad = loadable(
    () => import("background-image-on-load"),
    { ssr: false }
)

export default function Events() {
    const [weeklyLoaded, setWeeklyLoaded] = useState(false)
    const [flagshipLoaded, setFlagshipLoaded] = useState(false)
    const [retreatsloaded, setRetreatsLoaded] = useState(false)

    return weeklyLoaded && flagshipLoaded && retreatsloaded ? (
        <Layout>
            <Helmet>
                <title>Events | KCSOC</title>
                <meta name="description" content="KCSOC Events" />
            </Helmet>
            <FadeIn>
                <Header isOpaque={true} dark={true} />

                <Fade>
                    <EventInfo />
                </Fade>
                <Fade>
                    <EventCalendar />
                </Fade>
            </FadeIn>
        </Layout>
    ) : (
        <Layout>
            <div className={loadingStyles.container}>
                <Helmet>
                    <title>Events | KCSOC</title>
                    <meta name="description" content="KCSOC Events" />
                </Helmet>
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
                    loading={
                        !(weeklyLoaded && flagshipLoaded && retreatsloaded)
                    }
                />
            </div>
        </Layout>
    )
}
