import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import quoteSliderStyles from "../styles/components/quoteSlider.module.scss"

export default function QuoteSlider() {
    return (
        <div className={quoteSliderStyles.slider}>
            <Carousel showThumbs={false}>
                <div>
                    <img src="watercolor-2.jpg" />
                </div>
                <div>
                    <img src="watercolor-2.jpg" />
                </div>
                <div>
                    <img src="watercolor-2.jpg" />
                </div>
            </Carousel>
        </div>
    )
}
