import React, { useState } from "react"
import BackgroundImageOnLoad from "background-image-on-load"
import RingLoader from "react-spinners/RingLoader"
import FadeIn from "../components/fadeIn"
import LandingImage from "../components/home/landingImage"
import GetInvolved from "../components/home/getInvolved"
import loadingStyles from "../styles/loading.module.scss"

export default function Home() {
    const [bgLoaded, setbgLoaded] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)

    return bgLoaded ? (
        <div>
            <FadeIn>
                <LandingImage />
                <GetInvolved />
            </FadeIn>
        </div>
    ) : (
        <div
            className={`${loadingStyles.container} ${
                fadeOut && loadingStyles.fadeOut
            } `}
        >
            <BackgroundImageOnLoad
                src={"/simon-migaj-dark-3.jpg"}
                onLoadBg={() => {
                    setFadeOut(true)
                    setbgLoaded(true)
                }}
                onError={err => console.log("Error: ", err)}
            />
            <RingLoader size={60} color={"#9113FE"} loading={!bgLoaded} />
        </div>
    )
}
