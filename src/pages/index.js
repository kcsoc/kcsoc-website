import React from "react"

export default function Home() {
    return (
        <div className="fade-in-first">
            <div className="background-image">
                <div className="header">
                    <img
                        className="logo"
                        alt="kcsoc-logo"
                        src="KCSoc-logo-white.png"
                    />
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
                </div>

                <div className="inner-container">
                    <h1 className="center-h1">Find Yourself</h1>
                    <h2 className="subtitle">
                        Your online spiritual experience
                    </h2>

                    <section id="section05" className="demo">
                        <a href="#section06">
                            <span></span>
                        </a>
                    </section>
                </div>
                <section id="section06"></section>
            </div>
        </div>
    )
}
