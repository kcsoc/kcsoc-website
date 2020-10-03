import React from "react"
import Header from "../header"
import landingImageStyles from "../../styles/components/home/landingImage.module.scss"

export default function landingImage() {
    return (
        <>
            <div className={landingImageStyles.backgroundImage}>
                <Header isOpaque={true} />

                <div className={landingImageStyles.innerContainer}>
                    <h1 className={landingImageStyles.title}>Find Yourself</h1>
                    <h2 className={landingImageStyles.subtitle}>
                        Your online spiritual experience
                    </h2>
                </div>

                <div className={landingImageStyles.scrollDown}>
                    <div className={landingImageStyles.scroll}>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    )
}
