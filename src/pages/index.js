import React from "react"
import Head from "../components/head"

import homePageStyles from "../styles/pages/index.module.scss"

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className={homePageStyles.fadeInFirst}>
                <div className={homePageStyles.backgroundImage}>
                    <header className={homePageStyles.header}>
                        <img
                            className={homePageStyles.logo}
                            alt="kcsoc-logo"
                            src="KCSoc-logo-white.png"
                        />
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Events</a>
                                </li>
                                <li>
                                    <a href="#">Retreats</a>
                                </li>
                                <li>
                                    <a href="#">Explore</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <div className={homePageStyles.innerContainer}>
                        <h1 className={homePageStyles.title}>Find Yourself</h1>
                        <h2 className={homePageStyles.subtitle}>
                            Your online spiritual experience
                        </h2>

                        <a className={homePageStyles.scrollDown} href="#about">
                            <div className={homePageStyles.mouse}>
                                <span></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
