import React from "react"
import FadeIn from "../components/fadeIn"
import Header from "../components/header"
import GetInvolvedInfo from "../components/get-involved/getInvolvedInfo"
import GetInvolvedForm from "../components/get-involved/getInvolvedForm"
import Layout from "../components/layout"

export default function GetInvolved() {
    return (
        <Layout>
            <FadeIn>
                <Header isOpaque={true} dark={true} />
                <GetInvolvedInfo />
                <GetInvolvedForm />
            </FadeIn>
        </Layout>
    )
}
