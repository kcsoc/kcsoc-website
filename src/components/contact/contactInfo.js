import React from "react"
import { FaPhone, FaHome, FaEnvelope } from "react-icons/fa"

import contactInfoStyles from "../../styles/components/contact/contactInfo.module.scss"

export default function ContactInfo() {
    return (
        <div className={contactInfoStyles.outerContainer}>
            <h1>Contact</h1>
            <div className={contactInfoStyles.container}>
                <h2>Got a question or a query?</h2>
                <h2>Get in touch by sending a message below.</h2>
            </div>
            <hr />

            <div className={contactInfoStyles.infoContainer}>
                <div
                    className={`${contactInfoStyles.call} ${contactInfoStyles.infoBox}`}
                >
                    <FaPhone size="1.2em"/>

                    <p>
                        Call us at <b>07875 209 682</b>
                    </p>
                </div>
                <div
                    className={`${contactInfoStyles.visit} ${contactInfoStyles.infoBox}`}
                >
                    <FaHome size="1.4em"/>
                    <p>
                        Visit us at{" "}
                        <b>
                            Bhaktivedanta Manor, Hilfield Lane, Radlett,
                            Watford, WD25 8HE
                        </b>
                    </p>
                </div>
                <div
                    className={`${contactInfoStyles.email} ${contactInfoStyles.infoBox}`}
                >
                    <FaEnvelope size="1.4em"/>
                    <p>
                        Email us at{" "}
                        <a href="mailto:info@krishnasoc.com">
                            <b>info@krishnasoc.com</b>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
