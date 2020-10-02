import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/global.scss"
import layoutStyles from "../styles/components/layout.module.scss"
import MenuContext from "./contexts/menuContext"

export default function Layout(props) {
    const [menuShown, setMenuShown] = useState(false)
    const [menuCross, setMenuCross] = useState(false)

    return (
        <>
            <div
                className={`${layoutStyles.mobileMenu} ${
                    !menuShown && layoutStyles.hidden
                }`}
            >
                <nav className={layoutStyles.overlay}>
                    <ul>
                        <li>
                            <Link
                                href="/"
                                activeClassName={layoutStyles.active}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                activeClassName={layoutStyles.active}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/events"
                                activeClassName={layoutStyles.active}
                            >
                                Events
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                activeClassName={layoutStyles.active}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <input
                    type="checkbox"
                    id="overlay-input"
                    value={menuShown}
                    onChange={() => {
                        setMenuShown(!menuShown)
                        setTimeout(() => {
                            setMenuCross(!menuCross)
                        }, 50)
                    }}
                    className={layoutStyles.overlayInput}
                />
                <label
                    for="overlay-input"
                    className={`${layoutStyles.overlayButton} ${
                        menuCross && layoutStyles.cross
                    }`}
                >
                    <span></span>
                </label>
            </div>

            <MenuContext.Provider
                value={{
                    menuCross,
                }}
            >
                {props.children}
            </MenuContext.Provider>
        </>
    )
}
