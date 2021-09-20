import React from "react"
import getInvolvedInfoStyles from "../../styles/components/get-involved/getInvolvedInfo.module.scss"
import bg from "../../../static/BG.jpg"

export default function GetInvolvedInfo() {
    return (
        <div className={getInvolvedInfoStyles.container}>
            <h1>Get Involved</h1>
            <div className={getInvolvedInfoStyles.infoContainer}>
                <div>
                    <p>
                        Get involved with a KCSOC near you. We are always open
                        to all university members and we want to share our love
                        of spirituality, meditation and philosophy as far and
                        wide as we can.
                    </p>
                    <p>
                        After a full year of KCSOC online over lockdown, we're
                        extremely excited to announce that KCSOCs are returning
                        to in-person events across the country! Get Involved
                        today, to make new spiritual friendships, learn
                        incredible mind-blowing philsophy and experience the
                        ultimate happiness!
                    </p>
                </div>

                <img
                    className={getInvolvedInfoStyles.bg}
                    src={bg}
                    alt="Bhagavad Gita"
                />
            </div>
            <p className={getInvolvedInfoStyles.instruction}>
                Fill out your information below and a member of the KCSOC
                National team will reach out to help find the right KCSOC for
                you.
            </p>
        </div>
    )
}
