import React, { useState } from "react"
import FadeIn from "../components/fadeIn"
import LandingImage from "../components/home/landingImage"
import GetInvolved from "../components/home/getInvolved"

const BackgroundImageOnLoad = loadable(
    () => import("background-image-on-load"),
    { ssr: false }
)

export default function Home() {
    const [bgloaded, setBgLoaded] = useState(false)

    return bgloaded ? (
        <div>
            <FadeIn>
                <LandingImage />
                <GetInvolved />
            </FadeIn>
        </div>
    ) : (
        <div>
            <BackgroundImageOnLoad
                src={"/simon-migaj-dark-3.jpg"}
                onLoadBg={() => setBgLoaded(true)}
                onError={err => console.log("Error: ", err)}
            />

            <h1>Images are loading...</h1>
        </div>
    )
}
