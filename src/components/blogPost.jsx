import React from "react"

const BlogPost = ({ details }) => {
  return (
    <article>
      <p>{details.date}</p>
      <h4>{details.title}</h4>
    </article>
  )
}

export default BlogPost
