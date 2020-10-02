import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default function Home() {
    return (
        <Layout>
            <Helmet>
                <title>Universities | KCSOC</title>
                <meta
                    name="description"
                    content="KCSOC runs university societies around the UK"
                />
            </Helmet>
            <h2>We have x many KCSocs at universities around the world!</h2>
            <h2>
                Don't see your university on the list? Why not help start one at
                your university?
            </h2>

            <h1>Map(s) here</h1>

            <h1>University images here</h1>
        </Layout>
    )
}
