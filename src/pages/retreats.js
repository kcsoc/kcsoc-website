import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default function Home() {
    return (
        <Layout>
            <Helmet>
                <title>Retreats | KCSOC</title>
                <meta name="description" content="KCSOC Retreats" />
            </Helmet>
            <h1>Retreats page</h1>
        </Layout>
    )
}
