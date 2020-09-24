import React from "react"
import FadeIn from "../components/fadeIn"
import Header from "../components/header"
import SetUpAKCSOCInfo from "../components/set-up-a-kcsoc/setUpAKCSOCInfo"

export default function SetUpAKCSOC() {
    return (
        <FadeIn>
            <Header isOpaque={true} dark={true} />
            <SetUpAKCSOCInfo />
        </FadeIn>
    )
}
