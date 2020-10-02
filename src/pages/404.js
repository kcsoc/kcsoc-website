import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Header from "../components/header"
import FadeIn from "../components/fadeIn"
import Layout from "../components/layout"

import NotFoundStyles from "../styles/notFound.module.scss"

export default function NotFound() {
    return (
        <Layout>
            <Helmet>
                <title>404 Not Found | KCSOC</title>
                <meta name="description" content="About KCSOC" />
            </Helmet>
            <FadeIn>
                <Header isOpaque={true} dark={true} />
                <div className={NotFoundStyles.container}>
                    <h2>You seem to be lost...</h2>
                    <h2>Perhaps we can help you find your way. </h2>
                    <Link to="/" className={NotFoundStyles.link}>
                        <h2>Click here</h2>
                    </Link>
                </div>
            </FadeIn>
        </Layout>
    )
}
