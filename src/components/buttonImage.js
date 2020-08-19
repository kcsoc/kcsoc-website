import React from "react"

export default function ButtonImage(props) {
    return (
        <div style={{ backgroundImage: `url(${props.imageUrl})` }}>
            <h3>{props.text}</h3>
        </div>
    )
}
