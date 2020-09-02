import React, { useState } from "react"
import universityMapStyles from "../../styles/components/home/universityMap.module.scss"

export default function UniversityMap() {
    const [selected, setSelected] = useState("")
    const [transparent, setTransparent] = useState(false)

    const setInfo = university => {
        if (selected !== university) {
            setTransparent(true)
            setTimeout(() => {
                setSelected(university)
                setTransparent(false)
            }, 100)
        }
    }

    const renderInfo = () => {
        switch (selected) {
            case "":
                return (
                    <>
                        <h1>
                            32 KCSocs in 17 different locations around the UK!
                        </h1>
                        <h2>Click a pointer on the map to find out more</h2>
                    </>
                )

            case "glasgow":
                return <h2>You've selected Glasgow!</h2>

            default:
                return <h2>You've selected {selected}!</h2>
        }
    }

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
                    onClick={() => {
                        setInfo("glasgow")
                    }}
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.edinburgh}`}
                    src="map-pointer-inverted.png"
                    alt="edinburgh"
                    onClick={() => {
                        setInfo("edinburgh")
                    }}
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.mmu}`}
                    src="map-pointer.png"
                    alt="mmu"
                    onClick={() => {
                        setInfo("mmu")
                    }}
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.nottingham}`}
                    src="map-pointer.png"
                    alt="nottingham"
                    onClick={() => {
                        setInfo("nottingham")
                    }}
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.loughborough}`}
                    src="map-pointer-inverted.png"
                    alt="loughborough"
                    onClick={() => {
                        setInfo("loughborough")
                    }}
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.dmu}`}
                    src="map-pointer.png"
                    alt="dmu"
                    onClick={() => {
                        setInfo("dmu")
                    }}
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.coventry}`}
                    src="map-pointer-inverted.png"
                    alt="coventry"
                    onClick={() => {
                        setInfo("coventry")
                    }}
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.warwick}`}
                    src="map-pointer.png"
                    alt="warwick"
                    onClick={() => {
                        setInfo("warwick")
                    }}
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.birmingham}`}
                    src="map-pointer-inverted.png"
                    alt="birmingham"
                    onClick={() => {
                        setInfo("birmingham")
                    }}
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.cambridge}`}
                    src="map-pointer-inverted.png"
                    alt="cambridge"
                    onClick={() => {
                        setInfo("cambridge")
                    }}
                />
                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.oxford}`}
                    src="map-pointer-inverted.png"
                    alt="oxford"
                    onClick={() => {
                        setInfo("oxford")
                    }}
                />

                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.hertfordshire}`}
                    src="map-pointer.png"
                    alt="hertfordshire"
                    onClick={() => {
                        setInfo("hertfordshire")
                    }}
                />

                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.bristol}`}
                    src="map-pointer-inverted.png"
                    alt="bristol"
                    onClick={() => {
                        setInfo("bristol")
                    }}
                />

                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.reading}`}
                    src="map-pointer.png"
                    alt="reading"
                    onClick={() => {
                        setInfo("reading")
                    }}
                />

                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.london}`}
                    src="map-pointer-inverted.png"
                    alt="london"
                    onClick={() => {
                        setInfo("london")
                    }}
                />

                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.kent}`}
                    src="map-pointer.png"
                    alt="kent"
                    onClick={() => {
                        setInfo("kent")
                    }}
                />

                <img
                    className={`${universityMapStyles.pointer} ${universityMapStyles.southampton}`}
                    src="map-pointer-inverted.png"
                    alt="southampton"
                    onClick={() => {
                        setInfo("southampton")
                    }}
                />
            </div>

            <div
                className={`${universityMapStyles.infoContainer} ${
                    transparent ? universityMapStyles.transparent : ""
                }`}
            >
                {renderInfo()}
            </div>
        </div>
    )
}
