import React from "react"
import Navbar from "./navbar"
import style from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
