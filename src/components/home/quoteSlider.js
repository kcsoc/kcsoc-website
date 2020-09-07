import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import quoteSliderStyles from "../../styles/components/home/quoteSlider.module.scss"

import watercolor from "./watercolor-2.jpg"

export default function QuoteSlider() {
    return (
        <div className={quoteSliderStyles.slider}>
            <Carousel showThumbs={false}>
                <div>
                    <img src={watercolor} />
                </div>
                <div>
                    <img src={watercolor} />
                </div>
                <div>
                    <img src={watercolor} />
                </div>
            </Carousel>
        </div>
    )
}
