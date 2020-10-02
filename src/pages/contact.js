import React from "react"
import Header from "../components/header"
import FadeIn from "../components/fadeIn"
import ContactInfo from "../components/contact/contactInfo"
import Layout from "../components/layout"

export default function Contact() {
    return (
        <Layout>
            <FadeIn>
                <Header isOpaque={true} dark={true} />
                <ContactInfo />
            </FadeIn>
        </Layout>
    )
}
