import React, { useState } from "react"
import BackgroundImageOnLoad from "background-image-on-load"

export default function Home() {
    const [bgIsLoaded, setBgIsLoaded] = useState(false)
    return (
        <div
            style={{
                height: 1100,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",

                backgroundImage: `url(${
                    !bgIsLoaded
                        ? "https://picsum.photos/310/310?blur"
                        : "https://picsum.photos/1600/310"
                })`,
            }}
        >
            <BackgroundImageOnLoad
                src={"https://unsplash.it/1200/310?random"}
                onLoadBg={() => setBgIsLoaded(true)}
                onError={err => console.log("Error: ", err)}
            />
        </div>
    )
}
