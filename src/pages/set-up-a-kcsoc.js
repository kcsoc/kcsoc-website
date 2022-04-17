import React from "react"
import { Helmet } from "react-helmet"
import FadeIn from "../components/fadeIn"
import Header from "../components/header"
import SetUpAKCSOCInfo from "../components/set-up-a-kcsoc/setUpAKCSOCInfo"
import SetUpAKCSOCForm from "../components/set-up-a-kcsoc/setUpAKCSOCForm"
import Layout from "../components/layout"

export default function SetUpAKCSOC() {
    return (
        <Layout>
            <Helmet>
                <title>Set Up a KCSOC | KCSOC</title>
                <meta name="description" content="Help set up a KCSOC" />
                <script defer data-domain="kcsoc.com" src="https://plausible.cc/js/script.js"></script>
            </Helmet>
            <FadeIn>
                <Header isOpaque={true} dark={true} />
                <SetUpAKCSOCInfo />
                <SetUpAKCSOCForm />
            </FadeIn>
        </Layout>
    )
}
