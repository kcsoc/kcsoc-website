import React from "react"
import Header from "../components/header"
import FadeIn from "../components/fadeIn"
import ContactInfo from "../components/contact/contactInfo"

export default function Contact() {
    return (
        <div>
            <FadeIn>
                <Header isOpaque={true} dark={true} />
                <ContactInfo />
            </FadeIn>
        </div>
    )
}
