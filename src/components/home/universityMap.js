import React, { useState } from "react"
import universityMapStyles from "../../styles/components/home/universityMap.module.scss"
import { render } from "node-sass"

export default function UniversityMap() {
    // const [selected, setSelected] = useState("")

    // const renderUniInfo = () => {
    //     switch (selected) {
    //         case "":
    //             return (
    //                 <>
    //                     <h1>
    //                         32 KCSocs in 17 different locations around the UK!
    //                     </h1>
    //                     <h2>Click a pointer on the map to find out more</h2>
    //                 </>
    //             )

    //         case "glasgow":
    //             return <h2>You've selected Glasgow!</h2>

    //         default:
    //             return <h2>Error</h2>
    //     }
    // }

    return (
        <div className={universityMapStyles.outerContainer}>
            <div className={universityMapStyles.mapContainer}>
                <img
                    className={universityMapStyles.map}
                    src="uk.png"
                    alt="uk-map"
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.glasgow}`}
                    src="map-pointer.png"
                    alt="glasgow"
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.edinburgh}`}
                    src="map-pointer-inverted.png"
                    alt="edinburgh"
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.mmu}`}
                    src="map-pointer.png"
                    alt="mmu"
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.nottingham}`}
                    src="map-pointer.png"
                    alt="nottingham"
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.loughborough}`}
                    src="map-pointer-inverted.png"
                    alt="loughborough"
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.dmu}`}
                    src="map-pointer.png"
                    alt="dmu"
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.coventry}`}
                    src="map-pointer-inverted.png"
                    alt="coventry"
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.warwick}`}
                    src="map-pointer.png"
                    alt="warwick"
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.birmingham}`}
                    src="map-pointer-inverted.png"
                    alt="birmingham"
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.cambridge}`}
                    src="map-pointer-inverted.png"
                    alt="cambridge"
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.oxford}`}
                    src="map-pointer-inverted.png"
                    alt="oxford"
                />

                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.hertfordshire}`}
                    src="map-pointer.png"
                    alt="hertfordshire"
                />

                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.bristol}`}
                    src="map-pointer-inverted.png"
                    alt="bristol"
                />

                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.reading}`}
                    src="map-pointer.png"
                    alt="reading"
                />

                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.london}`}
                    src="map-pointer-inverted.png"
                    alt="london"
                />

                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.kent}`}
                    src="map-pointer.png"
                    alt="kent"
                />

                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.southampton}`}
                    src="map-pointer-inverted.png"
                    alt="southampton"
                />
            </div>

            <div className={universityMapStyles.infoContainer}>
              
            </div>
        </div>
    )
}
