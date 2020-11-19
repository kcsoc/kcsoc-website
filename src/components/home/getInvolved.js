import React, { useState } from "react"
import { Link } from "gatsby"
import ReactPlayer from "react-player"
import getInvolvedStyles from "../../styles/components/home/getInvolved.module.scss"
import QuoteSlider from "./quoteSlider"
import UniversityMap from "./universityMap"
import NeverForget from "./neverForget"

import lotusPosition from "./lotus-position.png"

// <svg
//     className={getInvolvedStyles.wave}
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 1440 320"
// >
// </svg>

export default function GetInvolved() {
    const [isTriggered, setIsTriggered] = useState(false)
    const trigger = isVisible => {
        setIsTriggered(!isTriggered)
    }

    const renderWidth = () => {
        if (window && window.innerWidth < 1000) {
            return `${window.innerWidth * 0.7} px`
        }

        return "810px"
    }
    console.log(renderWidth())

    const renderHeight = () => {
        if (window && window.innerWidth < 1000) {
            return `${Math.floor((window.innerWidth * 0.8) / 810)} px`
        }
        return "456px"
    }

    return (
        <div
            className={`${getInvolvedStyles.container} ${
                !isTriggered ? getInvolvedStyles.black : ""
            }`}
            id="get-involved"
        >
            <div className={getInvolvedStyles.sheet}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=s6QJBk0NZEM"
                    controls={true}
                    width={renderWidth()}
                    height={renderHeight()}
                />
                <h1 className={getInvolvedStyles.headline}>
                    Be Part of Something Amazing
                </h1>
                <Link to="/get-involved" className={getInvolvedStyles.btn}>
                    Get Involved
                </Link>
            </div>

            <div className={`${getInvolvedStyles.aboutInfo}`}>
                <div>
                    <h2>What We Do</h2>
                    <p className={getInvolvedStyles.aboutMessage}>
                        The Krishna Consciousness Society is a platform which
                        brings together deep thinkers and spiritual seekers for
                        interactive seminars, refreshing retreats and
                        association of like-minded people.
                        <br />
                        <br />
                        Would you say you’re a deep thinker? Are you interested
                        in finding out how to apply spiritual principles to your
                        every day life, to not only benefit your life, but the
                        lives of others? The Krishna Consciousness Society
                        offers a platform to evolve the mind, give direction in
                        life, and reveal a deeper level of insight with
                        like-minded people.
                    </p>
                    <Link to="/about">
                        <p>Find out more</p>
                    </Link>
                </div>

                <img
                    className={getInvolvedStyles.meditator}
                    alt="meditation"
                    src={lotusPosition}
                />
            </div>

            <UniversityMap />
            <QuoteSlider />
            <NeverForget trigger={trigger} isTriggered={isTriggered} />
        </div>
    )
}
