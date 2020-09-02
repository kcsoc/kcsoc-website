import React from "react"
import universityMapStyles from "../../styles/components/home/universityMap.module.scss"

export default function UniversityMap() {
    return (
        <div>
            <img className={universityMapStyles.map} src="uk.png" alt="uk-map">
                <img src="map-pointer.png" />
            </img>
        </div>
    )
}
