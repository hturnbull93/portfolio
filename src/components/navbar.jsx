import React from "react"
import style from "./navbar.module.scss"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <Link activeClassName={style.active} to="/">About</Link>
        </li>
        <li>
          <Link activeClassName={style.active} to="/projects">Projects</Link>
        </li>
        <li>
          <Link activeClassName={style.active} to="/blog">Blog</Link>
        </li>
        <li>
          <Link activeClassName={style.active} to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
