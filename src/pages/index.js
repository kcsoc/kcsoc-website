import React from "react"
import FadeIn from "../components/fadeIn"
import LandingImage from "../components/home/landingImage"
import GetInvolved from "../components/home/getInvolved"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
