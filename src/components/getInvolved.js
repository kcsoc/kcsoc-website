import React from "react"
import ReactPlayer from "react-player"
import getInvolvedStyles from "../styles/components/getInvolved.module.scss"
import Fade from "react-reveal/Fade"

export default function GetInvolved() {
    return (
        <div className={getInvolvedStyles.container}>
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

            <div className={getInvolvedStyles.aboutInfo}>
                <div className={getInvolvedStyles.about}>
                    <p>
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
                </div>
                <Fade>
                    <img
                        className={getInvolvedStyles.meditator}
                        alt="meditation"
                        src="/Nikita.png"
                    />
                </Fade>
            </div>
        </div>
    )
}
