import React from "react"
import style from "./navbar.module.scss"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className={`${style.sidebar} border`}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
