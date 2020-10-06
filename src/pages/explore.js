import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"


export default function Explore() {
    return (
        <Layout>
            <Helmet>
                <title>Explore | KCSOC</title>
                <meta
                    name="description"
                    content="Explore what KCSOC has to offer."
                />
            </Helmet>
        </Layout>
    )
}
