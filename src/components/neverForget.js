import React from "react"
import neverForgetStyles from "../styles/components/neverForget.module.scss"
import VisibilitySensor from "react-visibility-sensor"
import Header from "./header"

export default function NeverForget({ trigger, isTriggered }) {
    return (
        <div className={neverForgetStyles.wrapper}>
            <Header isOpaque={!isTriggered} />
            <div className={neverForgetStyles.messageWrapper}>
                <h2>Never forget the day you went from fitting in to...</h2>
                <h1
                    className={`${neverForgetStyles.message} ${
                        !isTriggered ? "" : neverForgetStyles.hidden
                    }`}
                >
                    STANDING OUT
                </h1>

                <VisibilitySensor partialVisibility={true} onChange={trigger}>
                    <p className={neverForgetStyles.trigger}>Trigger 3</p>
                </VisibilitySensor>
            </div>
        </div>
    )
}
