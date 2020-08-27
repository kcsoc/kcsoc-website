import React from "react"
import FadeIn from "../components/fadeIn"
import LandingImage from "../components/landingImage"
import GetInvolved from "../components/getInvolved"

export default function Home() {
    return (
        <div>
            <FadeIn>
                <LandingImage />
                <GetInvolved />
            </FadeIn>
        </div>
    )
}
