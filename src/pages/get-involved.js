import React from "react"
import FadeIn from "../components/fadeIn"
import Header from "../components/header"
import GetInvolvedInfo from "../components/get-involved/getInvolvedInfo"

export default function GetInvolved() {
    return (
        <FadeIn>
            <Header isOpaque={true} dark={true} />
            <GetInvolvedInfo />
        </FadeIn>
    )
}
