import React from "react"
import { Link } from "gatsby"

import headerStyles from "../styles/components/header.module.scss"
import logoDark from "./logo-dark.png"
import logoLight from "./logo-light.png"

// Temporarily removed the Explore and Shop menu items

// <li>
// <Link
//     href="/explore"
//     activeClassName={headerStyles.active}
// >
//     Explore
// </Link>
// </li>
// <li>
// <Link
//     href="/shop"
//     activeClassName={headerStyles.active}
// >
//     Shop
// </Link>
// </li>

export default function Header({ isOpaque, dark }) {
    return (
        <header
            className={`${headerStyles.header} ${
                isOpaque ? "" : headerStyles.transparent
            } ${dark ? headerStyles.dark : ""}`}
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

            <nav>
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
        </header>
    )
}
