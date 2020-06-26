import React from "react"
import Navbar from "./navbar"
import style from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
