import React, { useState } from "react"
import loadable from "@loadable/component"
import { Helmet } from "react-helmet"
import RingLoader from "react-spinners/RingLoader"
import FadeIn from "../components/fadeIn"
import LandingImage from "../components/home/landingImage"
import GetInvolved from "../components/home/getInvolved"
import loadingStyles from "../styles/loading.module.scss"
import Layout from "../components/layout"

const BackgroundImageOnLoad = loadable(
    () => import("background-image-on-load"),
    { ssr: false }
)

export default function Home() {
    const [bgLoaded, setBgLoaded] = useState(false)

    return bgLoaded ? (
        <Layout>
            <Helmet>
                <title>Home | KCSOC</title>
                <meta
                    name="description"
                    content="Welcome to KCSOC, the Krishna Consciousness Society."
                />
                <script defer data-domain="kcsoc.com" src="https://plausible.cc/js/script.js"></script>
            </Helmet>
            <FadeIn>
                <LandingImage />
                <GetInvolved />
            </FadeIn>
        </Layout>
    ) : (
        <Layout>
            <Helmet>
                <title>Home | KCSOC</title>
                <meta
                    name="description"
                    content="Welcome to KCSOC, the Krishna Consciousness Society."
                />
                <script defer data-domain="kcsoc.com" src="https://plausible.cc/js/script.js"></script>
            </Helmet>
            <div className={loadingStyles.container}>
                <BackgroundImageOnLoad
                    src={"/simon-migaj-dark-3.jpg"}
                    onLoadBg={() => setBgLoaded(true)}
                    onError={err => console.log("Error: ", err)}
                />
                <RingLoader size={60} color={"#9113FE"} loading={!bgLoaded} />
            </div>
        </Layout>
    )
}
