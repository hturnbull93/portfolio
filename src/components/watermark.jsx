import React from "react"
import style from "./watermark.module.scss"

const Watermark = ({ children }) => {
  return (
    <div className={style.watermark}>
      {children}
      <div className={style.watermark_text} aria-hidden="true">
        {children.props.children}
      </div>
    </div>
  )
}

export default Watermark
