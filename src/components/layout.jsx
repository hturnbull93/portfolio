import React from "react"
import Sidebar from "./sidebar"
import style from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Sidebar />
      <section className={style.content}>{children}</section>
    </div>
  )
}

export default Layout
