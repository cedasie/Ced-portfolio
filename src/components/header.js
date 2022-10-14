import * as React from "react"
import * as headerStyles from "./header.module.css"
import { Link } from "gatsby"

const Header = () => {
  return (
    <>
      <nav className={headerStyles.sidebar}>
        <ul>
          <li>
            <Link activeClassName={headerStyles.activeNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.activeNav} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.activeNav} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
