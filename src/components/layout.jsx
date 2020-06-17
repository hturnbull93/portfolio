import React from "react"
import Sidebar from "./sidebar"
import style from "./layout.module.scss"

const Layout = ({ children }) => {
  const borderChoice = Math.floor(Math.random() * 6 + 1)
  return (
    <div className={style.layout}>
      <Sidebar />
      <section className={`${style.content} border border-${borderChoice}`}>{children}</section>
      <div className={style.bg}></div>
    </div>
  )
}

export default Layout
