import React from "react"
import FadeIn from "../components/fadeIn"
import Header from "../components/header"
import SetUpAKCSOCInfo from "../components/set-up-a-kcsoc/setUpAKCSOCInfo"
import SetUpAKCSOCForm from "../components/set-up-a-kcsoc/setUpAKCSOCForm"
import Layout from "../components/layout"

export default function SetUpAKCSOC() {
    return (
        <Layout>
            <FadeIn>
                <Header isOpaque={true} dark={true} />
                <SetUpAKCSOCInfo />
                <SetUpAKCSOCForm />
            </FadeIn>
        </Layout>
    )
}
