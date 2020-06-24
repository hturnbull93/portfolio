import React from "react"
import style from "./navbar.module.scss"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
