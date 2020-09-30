import React, { useState } from "react"
import BackgroundImageOnLoad from "background-image-on-load"
import FadeIn from "../components/fadeIn"
import LandingImage from "../components/home/landingImage"
import GetInvolved from "../components/home/getInvolved"

export default function Home() {
    const [bgloaded, setBgLoaded] = useState(false)
    console.log(bgloaded)
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
