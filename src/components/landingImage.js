import React from "react"
import Header from "./header"

import landingImageStyles from "../styles/components/landingImage.module.scss"

export default function landingImage() {
    return (
        <>
            <div className={landingImageStyles.backgroundImage}>
                <Header />

                <div className={landingImageStyles.innerContainer}>
                    <h1 className={landingImageStyles.title}>Find Yourself</h1>
                    <h2 className={landingImageStyles.subtitle}>
                        Your online spiritual experience
                    </h2>
                </div>

                <a className={landingImageStyles.scrollDown} href="#about">
                    <div className={landingImageStyles.mouse}>
                        <span></span>
                    </div>
                </a>
            </div>

            <div className={landingImageStyles.container}>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
            </div>
        </>
    )
}
