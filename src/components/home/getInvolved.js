import React, { useState } from "react"
import ReactPlayer from "react-player"
import getInvolvedStyles from "../../styles/components/home/getInvolved.module.scss"
import Fade from "react-reveal/Fade"
import QuoteSlider from "./quoteSlider"
import NeverForget from "./neverForget"

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
    console.log(isTriggered)
    return (
        <div
            className={`${getInvolvedStyles.container} ${
                !isTriggered ? getInvolvedStyles.black : ""
            }`}
        >
            <div className={getInvolvedStyles.sheet}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=s6QJBk0NZEM"
                    controls={true}
                    width="810px"
                    height="456px"
                />
                <h1>Be Part of Something Amazing</h1>
                <a className={getInvolvedStyles.btn}>Get Involved</a>
            </div>
            <Fade>
                <div className={getInvolvedStyles.aboutInfo}>
                    <div>
                        <h2>What We Do</h2>
                        <p>
                            The Krishna Consciousness Society is a platform
                            which brings together deep thinkers and spiritual
                            seekers for interactive seminars, refreshing
                            retreats and association of like-minded people.
                            <br />
                            <br />
                            Would you say you’re a deep thinker? Are you
                            interested in finding out how to apply spiritual
                            principles to your every day life, to not only
                            benefit your life, but the lives of others? The
                            Krishna Consciousness Society offers a platform to
                            evolve the mind, give direction in life, and reveal
                            a deeper level of insight with like-minded people.
                        </p>
                    </div>

                    <img
                        className={getInvolvedStyles.meditator}
                        alt="meditation"
                        src="/lotus-position.png"
                    />
                </div>
            </Fade>

            <path
                fill="#ff5500"
                fill-opacity="1"
                d="M0,96L30,112C60,128,120,160,180,192C240,224,300,256,360,240C420,224,480,160,540,138.7C600,117,660,139,720,160C780,181,840,203,900,197.3C960,192,1020,160,1080,154.7C1140,149,1200,171,1260,176C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>

            <QuoteSlider />

            <NeverForget trigger={trigger} isTriggered={isTriggered} />
        </div>
    )
}
