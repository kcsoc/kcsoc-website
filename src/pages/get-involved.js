import React from "react"
import FadeIn from "../components/fadeIn"
import Header from "../components/header"
import GetInvolvedInfo from "../components/get-involved/getInvolvedInfo"
import GetInvolvedForm from "../components/get-involved/getInvolvedForm"

export default function GetInvolved() {
    return (
        <FadeIn>
            <Header isOpaque={true} dark={true} />
            <GetInvolvedInfo />
            <GetInvolvedForm />
        </FadeIn>
    )
}
