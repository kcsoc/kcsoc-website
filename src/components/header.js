import React from "react"
import { Link } from "gatsby"

import headerStyles from "../styles/components/header.module.scss"

export default function Header({ isOpaque }) {
    return (
        <header
            className={`${headerStyles.header} ${
                isOpaque ? "" : headerStyles.transparent
            }`}
        >
            <img
                className={headerStyles.logo}
                alt="kcsoc-logo"
                src="/KCSoc-logo-white.png"
            />
            <nav>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/events">Events</Link>
                    </li>
                    <li>
                        <Link href="/explore">Explore</Link>
                    </li>
                    <li>
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
