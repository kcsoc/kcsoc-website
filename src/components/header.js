import React from "react"
import { Link } from "gatsby"

export default function Header() {
    return (
        <header id="header">
            <nav id="header-content">
                <img src="/KCSoc-logo-white.png" alt="logo" />
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/retreats">Retreats</Link>
                    </li>
                    <li>
                        <Link to="/universities">Universities</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
