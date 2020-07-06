import React from "react"

const Watermark = ({ children }) => {
  return (
    <div>
      {children}
      <div className="watermark">{children.props.children}</div>
    </div>
  )
}

export default Watermark
