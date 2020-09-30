import React, { useState } from "react"
import loadable from "@loadable/component"
import RingLoader from "react-spinners/RingLoader"
import FadeIn from "../components/fadeIn"
import LandingImage from "../components/home/landingImage"
import GetInvolved from "../components/home/getInvolved"
import loadingStyles from "../styles/loading.module.scss"

const BackgroundImageOnLoad = loadable(
    () => import("background-image-on-load"),
    { ssr: false }
)

export default function Home() {
    const [bgLoaded, setBgLoaded] = useState(false)

    return bgLoaded ? (
        <div>
            <FadeIn>
                <LandingImage />
                <GetInvolved />
            </FadeIn>
        </div>
    ) : (
        <div className={loadingStyles.container}>
            <BackgroundImageOnLoad
                src={"/simon-migaj-dark-3.jpg"}
                onLoadBg={() => setBgLoaded(true)}
                onError={err => console.log("Error: ", err)}
            />
            <RingLoader size={60} color={"#9113FE"} loading={!bgLoaded} />
        </div>
    )
}
