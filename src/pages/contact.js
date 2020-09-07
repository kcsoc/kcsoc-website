import React from "react"
import Header from "../components/header"
import FadeIn from "../components/fadeIn"
import ContactInfo from "../components/contact/contactInfo"
import { FaPhone } from 'react-icons/fa';

export default function Contact() {
    return (
        <div>
            <FaPhone />
            <FadeIn>
                <Header isOpaque={true} dark={true} />
                <ContactInfo />
            </FadeIn>
        </div>
    )
}
