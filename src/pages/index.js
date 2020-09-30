import React, { useState } from "react"
import BackgroundImageOnLoad from "background-image-on-load"
import FadeIn from "../components/fadeIn"
import LandingImage from "../components/home/landingImage"
import GetInvolved from "../components/home/getInvolved"
import RingLoader from "react-spinners/RingLoader"
import loadingStyles from "../styles/loading.module.scss"

export default function Home() {
    const [bgLoaded, setbgLoaded] = useState(false)

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
                onLoadBg={() => {
                    setTimeout(() => {
                        setbgLoaded(true)
                    }, 5000)
                }}
                onError={err => console.log("Error: ", err)}
            />
            <RingLoader size={60} color={"#9113FE"} loading={!bgLoaded} />
        </div>
    )
}
