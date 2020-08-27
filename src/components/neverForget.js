import React, { useState } from "react"
import neverForgetStyles from "../styles/components/neverForget.module.scss"
import VisibilitySensor from "react-visibility-sensor"

export default function NeverForget({ darken }) {
    const trigger1 = () => {
        console.log("trigger1")
    }

    const trigger2 = () => {
        console.log("trigger2")
    }

    const trigger3 = () => {
        console.log("trigger3")
    }

    const trigger4 = () => {
        console.log("trigger4")
    }

    return (
        <VisibilitySensor partialVisibility={true} onChange={trigger1}>
            <div className={neverForgetStyles.wrapper}>
                <h2>Never forget the day you went from fitting in to...</h2>

                <div>
                   <h1 className={neverForgetStyles.message}>STANDING OUT</h1>

                    <VisibilitySensor
                        partialVisibility={true}
                        onChange={trigger2}
                    >
                        <p className={neverForgetStyles.trigger}>Trigger 2</p>
                    </VisibilitySensor>
                    <VisibilitySensor
                        partialVisibility={true}
                        onChange={darken}
                    >
                        <p className={neverForgetStyles.trigger}>Trigger 3</p>
                    </VisibilitySensor>
                </div>
            </div>
        </VisibilitySensor>
    )
}
