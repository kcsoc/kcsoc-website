import React from "react"
import { Helmet } from "react-helmet"
import FadeIn from "../components/fadeIn"
import Header from "../components/header"
import GetInvolvedInfo from "../components/get-involved/getInvolvedInfo"
import GetInvolvedForm from "../components/get-involved/getInvolvedForm"
import Layout from "../components/layout"

export default function GetInvolved() {
    return (
        <Layout>
            <Helmet>
                <title>Get Involved | KCSOC</title>
                <meta
                    name="description"
                    content="Get involved with KCSOC. Sign up to our events!"
                />
            </Helmet>
            <FadeIn>
                <Header isOpaque={true} dark={true} />
                <GetInvolvedInfo />
                <GetInvolvedForm />
            </FadeIn>
        </Layout>
    )
}
