import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import quoteSliderStyles from "../../styles/components/home/quoteSlider.module.scss"
import quote1 from "../../../static/QuoteImages/quote1.png"
import quote2 from "../../../static/QuoteImages/quote2.png"
import quote3 from "../../../static/QuoteImages/quote3.png"
import quote4 from "../../../static/QuoteImages/quote4.png"
import quote5 from "../../../static/QuoteImages/quote5.png"

export default function QuoteSlider() {
    return (
        <div className={quoteSliderStyles.slider}>
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                useKeyboardArrows={true}
                autoPlay={true}
                interval={7000}
            >
                <div>
                    <img src={quote1} />
                    <div
                        className={`${quoteSliderStyles.text} ${quoteSliderStyles.rightText}`}
                    >
                        <p>
                            "Going to KCSOC has definitely allowed me to have a
                            bit more freedom of thought when I'm talking to
                            people."
                        </p>
                    </div>
                </div>
                <div>
                    <img src={quote2} />
                    <div
                        className={`${quoteSliderStyles.text} ${quoteSliderStyles.leftText} ${quoteSliderStyles.blackText}`}
                    >
                        <p>
                            "I feel like it's been connecting the dots for me
                            which I've been confused about for such a long
                            time."
                        </p>
                    </div>
                </div>
                <div>
                    <img src={quote3} />
                    <div
                        className={`${quoteSliderStyles.text} ${quoteSliderStyles.rightText} ${quoteSliderStyles.blackText}`}
                    >
                        <p>
                            "The people are amazing! Honestly, they're just so
                            genuine and so ready to explore and dig deeper into
                            their spiritual lives."
                        </p>
                    </div>
                </div>
                <div>
                    <img src={quote4} />
                    <div
                        className={`${quoteSliderStyles.text} ${quoteSliderStyles.rightText}`}
                    >
                        <p>
                            "I got to socialise with people I got to truly feel
                            comfortable with. Here, I actually felt like I was
                            learning something that isn't useless knowledge."
                        </p>
                    </div>
                </div>
                <div>
                    <img src={quote5} />
                    <div
                        className={`${quoteSliderStyles.text} ${quoteSliderStyles.leftText}`}
                    >
                        <p>
                            "The whole world should come to these retreats.
                            Every university should come at least once to these
                            things."
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
