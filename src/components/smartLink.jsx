import React from "react"
import { Link } from "gatsby"

const SmartLink = ({ to, href, children }) => {
  let link
  if (to) link = <Link to={to}>{children}</Link>
  if (href) link = <a href={href}>{children}</a>
  return <span>{link}.</span>
}

export default SmartLink
