import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import FadeIn from "../components/fadeIn"
import ContactInfo from "../components/contact/contactInfo"
import Layout from "../components/layout"

export default function Contact() {
    return (
        <Layout>
            <Helmet>
                <title>Contact | KCSOC</title>
                <meta name="description" content="Contact us to find out more." />
                <script defer data-domain="kcsoc.com" src="https://plausible.cc/js/script.js"></script>
            </Helmet>
            <FadeIn>
                <Header isOpaque={true} dark={true} />
                <ContactInfo />
            </FadeIn>
        </Layout>
    )
}
