import React from "react"
import Navbar from "./navbar"
import style from "./layout.module.scss"

const Layout = ({ children }) => {
  const borderChoice = Math.floor(Math.random() * 6 + 1)
  return (
    <div className={style.layout}>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
