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
                        Currently, due to the new lockdown rules imposed by the
                        UK government, we are not able to hold our sessions in
                        person. Rather, we have moved our talks, workshops and
                        retreats online, so you can enjoy our sessions from the
                        comfort of your home!
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
