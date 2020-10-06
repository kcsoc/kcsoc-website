import React, { useState } from "react"
import { Link } from "gatsby"
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
                            32 KCSOCs in 17 different locations around the UK
                        </h1>
                        <p>Click a pointer to discover more</p>
                    </>
                )

            case "glasgow":
                return (
                    <>
                        <h2>Glasgow</h2>
                        <p>University of Glasgow KCSOC</p>
                    </>
                )

            case "edinburgh":
                return (
                    <>
                        <h2>Edinburgh</h2>
                        <p>University of Edinburgh KCSOC</p>
                    </>
                )

            case "manchester":
                return (
                    <>
                        <h2>Manchester</h2>
                        <p>Manchester Metropolitan University KCSOC</p>
                    </>
                )

            case "nottingham":
                return (
                    <>
                        <h2>Nottingham</h2>
                        <p>University of Nottingham KCSOC</p>
                    </>
                )

            case "loughborough":
                return (
                    <>
                        <h2>Loughborough</h2>
                        <p>Loughborough University KCSOC</p>
                    </>
                )

            case "leicester":
                return (
                    <>
                        <h2>Leicester</h2>
                        <p>De Montfort University KCSOC</p>
                    </>
                )

            case "coventry":
                return (
                    <>
                        <h2>Coventry</h2>
                        <p>Coventry University KCSOC</p>
                    </>
                )

            case "warwick":
                return (
                    <>
                        <h2>Warwick</h2>
                        <p>University of Warwick KCSOC</p>
                    </>
                )

            case "birmingham":
                return (
                    <>
                        <h2>Birmingham</h2>
                        <p>Aston University KCSOC</p>
                        <p>Birmingham City University KCSOC</p>
                        <p>University of Birmingham KCSOC</p>
                    </>
                )
            case "cambridge":
                return (
                    <>
                        <h2>Cambridge</h2>
                        <p>University of Cambridge KCSOC</p>
                    </>
                )
            case "oxford":
                return (
                    <>
                        <h2>Oxford</h2>
                        <p>University of Oxford KCSOC</p>
                    </>
                )
            case "hatfield":
                return (
                    <>
                        <h2>Hatfield</h2>
                        <p>
                            University of Hertfordshire (College Lane Campus)
                            KCSOC
                        </p>
                    </>
                )
            case "bristol":
                return (
                    <>
                        <h2>Bristol</h2>
                        <p>University of Bristol KCSOC</p>
                    </>
                )
            case "reading":
                return (
                    <div>
                        <h2>Reading</h2>
                        <p>University of Reading KCSOC</p>
                    </div>
                )

            case "london":
                return (
                    <div>
                        <h2>London</h2>

                        <p>Brunel University KCSOC</p>
                        <p>City KCSOC</p>
                        <p>Imperial College London KCSOC</p>
                        <p>King's College London KCSOC</p>
                        <p>Kingston University KCSOC</p>
                        <p>London Metropolitan University KCSOC</p>
                        <p>Queen Mary KCSOC</p>
                        <p>Roehampton University KCSOC</p>
                        <p>SOAS KCSOC</p>
                        <p>St George's KCSOC</p>
                        <p>University College London KCSOC</p>
                        <p>University of East London KCSOC</p>
                    </div>
                )

            case "canterbury":
                return (
                    <>
                        <h2>Canterbury</h2>
                        <p>University of Kent KCSOC</p>
                    </>
                )
            case "southampton":
                return (
                    <>
                        <h2>Southampton</h2>
                        <p>University of Southampton KCSOC</p>
                    </>
                )
            default:
                return <h2>You've selected {selected}!</h2>
        }
    }

    return (
        <div>
            <div className={universityMapStyles.outerContainer}>
                <div className={universityMapStyles.mapContainer}>
                    <img
                        className={universityMapStyles.map}
                        src="uk.png"
                        alt="uk-map"
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.glasgow}`}
                        src="map-pointer.png"
                        alt="glasgow"
                        onClick={() => {
                            setInfo("glasgow")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.edinburgh}`}
                        src="map-pointer-inverted.png"
                        alt="edinburgh"
                        onClick={() => {
                            setInfo("edinburgh")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.manchester}`}
                        src="map-pointer.png"
                        alt="manchester"
                        onClick={() => {
                            setInfo("manchester")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.nottingham}`}
                        src="map-pointer.png"
                        alt="nottingham"
                        onClick={() => {
                            setInfo("nottingham")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.loughborough}`}
                        src="map-pointer-inverted.png"
                        alt="loughborough"
                        onClick={() => {
                            setInfo("loughborough")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.leicester}`}
                        src="map-pointer.png"
                        alt="leicester"
                        onClick={() => {
                            setInfo("leicester")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.coventry}`}
                        src="map-pointer-inverted.png"
                        alt="coventry"
                        onClick={() => {
                            setInfo("coventry")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.warwick}`}
                        src="map-pointer.png"
                        alt="warwick"
                        onClick={() => {
                            setInfo("warwick")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.birmingham}`}
                        src="map-pointer-inverted.png"
                        alt="birmingham"
                        onClick={() => {
                            setInfo("birmingham")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.cambridge}`}
                        src="map-pointer-inverted.png"
                        alt="cambridge"
                        onClick={() => {
                            setInfo("cambridge")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.oxford}`}
                        src="map-pointer-inverted.png"
                        alt="oxford"
                        onClick={() => {
                            setInfo("oxford")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.hatfield}`}
                        src="map-pointer.png"
                        alt="hatfield"
                        onClick={() => {
                            setInfo("hatfield")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.bristol}`}
                        src="map-pointer-inverted.png"
                        alt="bristol"
                        onClick={() => {
                            setInfo("bristol")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.reading}`}
                        src="map-pointer.png"
                        alt="reading"
                        onClick={() => {
                            setInfo("reading")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.london}`}
                        src="map-pointer-inverted.png"
                        alt="london"
                        onClick={() => {
                            setInfo("london")
                        }}
                    />

                    <input
                        type="image"
                        className={`${universityMapStyles.pointer} ${universityMapStyles.canterbury}`}
                        src="map-pointer.png"
                        alt="canterbury"
                        onClick={() => {
                            setInfo("canterbury")
                        }}
                    />

                    <input
                        type="image"
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
            <div className={universityMapStyles.setUpContainer}>
                <h2 className={universityMapStyles.setUpMessage}>
                    Can't find your university on the list?
                </h2>
                <Link className={universityMapStyles.btn} to="/set-up-a-kcsoc">
                    Set Up a KCSOC
                </Link>
            </div>
        </div>
    )
}
