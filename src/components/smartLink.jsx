import React from "react"
import { Link } from "gatsby"

const SmartLink = ({ to, href, children }) => {
  if (to) return <Link to={to}>{children}</Link>
  if (href) return <a href={href}>{children}</a>
}

export default SmartLink
