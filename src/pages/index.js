import React, { useState } from "react"
import BackgroundImageOnLoad from "background-image-on-load"
import RingLoader from "react-spinners/RingLoader"
import FadeIn from "../components/fadeIn"
import LandingImage from "../components/home/landingImage"
import GetInvolved from "../components/home/getInvolved"
import loadingStyles from "../styles/loading.module.scss"

export default function Home() {
    const [bgLoaded, setBgLoaded] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)

    const loadPage = () =>
        setTimeout(() => {
            setBgLoaded(true)
            setFadeOut(true)
        }, 5000)

    return bgLoaded ? (
        <div>
            <FadeIn>
                <LandingImage />
                <GetInvolved />
            </FadeIn>
        </div>
    ) : window ? (
        <div
            className={`${loadingStyles.container} ${
                fadeOut && loadingStyles.fadeOut
            } `}
        >
            <BackgroundImageOnLoad
                src={"/simon-migaj-dark-3.jpg"}
                onLoadBg={() => {
                    setFadeOut(true)
                    setBgLoaded(true)
                }}
                onError={err => console.log("Error: ", err)}
            />
            <RingLoader size={60} color={"#9113FE"} loading={!bgLoaded} />
        </div>
    ) : (
        <div>
            <h1>Loading...</h1>
            {loadPage()}
        </div>
    )
}
