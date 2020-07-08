import React from "react"
import SmartLink from "./smartLink"
import style from "./blogPost.module.scss"

const BlogPost = ({ details }) => {
  return (
    <article className={style.post}>
      <p>{details.date}</p>
      <SmartLink href={details.link}>
        <h3 className={style.title}>{details.title}</h3>
      </SmartLink>
    </article>
  )
}

export default BlogPost
