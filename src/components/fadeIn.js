import React from "react"

import fadeInStyles from "../styles/components/fadeIn.module.scss"

export default function FadeIn(props) {
    return <div className={fadeInStyles.fadeIn}>{props.children}</div>
}
