import React from "react"

const Watermark = ({ children }) => {
  return (
    <div>
      {children}
      <div className="watermark" aria-hidden="true">
        {children.props.children}
      </div>
    </div>
  )
}

export default Watermark
