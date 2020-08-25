import React from "react"
import { Link } from "gatsby"

import headerStyles from "../styles/components/header.module.scss"

export default function Header() {
    return (
        <header className={headerStyles.header}>
            <img
                className={headerStyles.logo}
                alt="kcsoc-logo"
                src="KCSoc-logo-white.png"
            />
            <nav>
                <ul>
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Events</Link>
                    </li>
                    <li>
                        <Link href="#">Retreats</Link>
                    </li>
                    <li>
                        <Link href="#">Explore</Link>
                    </li>
                    <li>
                        <Link href="#">Shop</Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
