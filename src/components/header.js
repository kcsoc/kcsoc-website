import React, { useContext } from "react"
import { Link } from "gatsby"
import MenuContext from "./contexts/menuContext"
import headerStyles from "../styles/components/header.module.scss"

import logoDark from "./logo-dark.png"
import logoLight from "./logo-light.png"

export default function Header({ isOpaque, dark }) {
    const { menuCross } = useContext(MenuContext)

    return (
        <header
            className={`${headerStyles.header} ${
                !isOpaque && headerStyles.transparent
            } ${dark && headerStyles.dark}`}
        >
            {dark ? (
                <Link href="/" activeClassName={headerStyles.active}>
                    <img
                        className={headerStyles.logo}
                        alt="kcsoc-logo-dark"
                        src={logoDark}
                    />
                </Link>
            ) : (
                <Link href="/" activeClassName={headerStyles.active}>
                    <img
                        className={headerStyles.logo}
                        alt="kcsoc-logo"
                        src={logoLight}
                    />
                </Link>
            )}

            <nav className={headerStyles.overlay}>
                <ul>
                    <li>
                        <Link href="/" activeClassName={headerStyles.active}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            activeClassName={headerStyles.active}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/events"
                            activeClassName={headerStyles.active}
                        >
                            Events
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/contact"
                            activeClassName={headerStyles.active}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <label
                htmlFor="overlay-input"
                for="overlay-input"
                className={`${headerStyles.overlayButton} ${
                    menuCross && headerStyles.cross
                } ${dark && headerStyles.dark}`}
            >
                <span></span>
            </label>
        </header>
    )
}
