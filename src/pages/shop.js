import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default function Home() {
    return (
        <Layout>
            <Helmet>
                <title>Shop | KCSOC</title>
                <meta
                    name="description"
                    content="KCSOC Shop"
                />
            </Helmet>
            <h1>Shop page</h1>
        </Layout>
    )
}
