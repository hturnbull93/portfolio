import React from "react"
import { Link } from "gatsby"

const SmartLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>
}

export default SmartLink
