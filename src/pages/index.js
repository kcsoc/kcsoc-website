import React from "react"
import FadeIn from "../components/fadeIn"
import LandingImage from "../components/landingImage"

import homePageStyles from "../styles/pages/index.module.scss"

export default function Home() {
    return (
        <FadeIn>
            <LandingImage />
        </FadeIn>
    )
}
