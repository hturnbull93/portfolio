import React from "react"
import Sidebar from "./sidebar"

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  )
}

export default Layout
