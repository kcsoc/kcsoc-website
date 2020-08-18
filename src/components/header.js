import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div>
    <img src="/KCSoc-logo-medium.png" alt="logo"/>
      <nav>
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
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
