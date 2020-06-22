import React from "react"
import style from "./sidebar.module.scss"
import { Link } from "gatsby"

const Sidebar = () => {
  return (
    <div className={`${style.sidebar} border`}>
      <h3>
        <span>HT</span> <small>Full Stack Developer</small>
      </h3>
      <nav>
      <section>
          <h4>Sections</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </section>
        <section>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="https://github.com/hturnbull93/cv">GitHub CV</a>
            </li>
            <li>
              <a href="https://twitter.com/hturnbull">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/harry-turnbull">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/hturnbull93">GitHub</a>
            </li>
            <li>
              <a href="https://medium.com/@hturnbull93">Medium Blog</a>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  )
}

export default Sidebar
