import React from "react"
import SmartLink from "./smartLink"

const BlogPost = ({ details }) => {
  return (
    <article>
      <p>{details.date}</p>
      <SmartLink href={details.link}>
        <h4>{details.title}</h4>
      </SmartLink>
    </article>
  )
}

export default BlogPost
