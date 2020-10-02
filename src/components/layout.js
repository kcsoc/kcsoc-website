import React from "react"
import "../styles/global.scss"
import underConstruction from "../../static/under-construction.png"
export default function Layout(props) {
    return (
        <>
            <div className="desktop">{props.children}</div>
            <div className="mobile">
                <h2>Mobile not optimised</h2>
                <p>
                    Unfortunately, the KCSOC team has not optimised this website
                    for mobile and tablet yet! We're working on it!
                </p>
                <p>
                    In the meantime, please checkout kcsoc.com on a laptop
                    or desktop to get the full experience!
                </p>
                <img src={underConstruction} alt="Under Construction" />
            </div>
        </>
    )
}
