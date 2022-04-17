import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import UniversityMap from "../components/home/universityMap"
import Header from "../components/header"
import styles from "../styles/components/universities/universities.module.scss"

export default function Home() {
    return (
        <Layout>
            <Helmet>
                <title>Universities | KCSOC</title>
                <meta
                    name="KCSOC Universities"
                    content="KCSOC runs university societies around the UK"
                />
                <script defer data-domain="kcsoc.com" src="https://plausible.cc/js/script.js"></script>
            </Helmet>
            <Header isOpaque={true} dark={true} />

            <h1 className={styles.title}>Find Your KCSOC</h1>
            <UniversityMap />
        </Layout>
    )
}
