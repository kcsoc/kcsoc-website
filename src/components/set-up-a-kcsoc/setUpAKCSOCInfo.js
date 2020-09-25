import React from "react"
import SetUpAKCSOCInfoStyles from "../../styles/components/set-up-a-kcsoc/setUpAKCSOCInfo.module.scss"
import chanting from "../../../static/chanting.jpg"

export default function SetUpAKCSOCInfo() {
    return (
        <div className={SetUpAKCSOCInfoStyles.container}>
            <h1>Set up a KCSOC</h1>
            <div>
                <div className={SetUpAKCSOCInfoStyles.infoContainer}>
                    <div>
                        <p>
                            KCSOC has grown over the years! We now have over 30
                            different societies in universities around the UK
                            and abroad. However, we're always looking to expand
                            and bring the joy of Krishna Consciousness,
                            philosophy and meditation to as many people as
                            possible.
                        </p>
                        <p>
                            Don't see a KCSOC near you? Does a KCSOC not exist
                            in your university? Help start one up!
                        </p>
                        <p>
                            The KCSOC National Team can help you set up a KCSOC
                            at your university, find speakers and ambassadors
                            and help run all events. We've got your back and can
                            support you 100%!
                        </p>
                    </div>

                    <img
                        className={SetUpAKCSOCInfoStyles.chanting}
                        src={chanting}
                        alt="Chanting"
                    />
                </div>
                <p className={SetUpAKCSOCInfoStyles.instruction}>
                    Fill out your information below and a member of the KCSOC
                    National team will reach out to help you set up a KCSOC.
                </p>
            </div>
        </div>
    )
}
