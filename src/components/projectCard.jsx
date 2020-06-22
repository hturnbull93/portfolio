import React from "react"

const ProjectCard = ({ details }) => {
  return (
    <div>
      <h4>{details.title}</h4>
      <h5>{details.tech}</h5>
      <p>{details.description}</p>
      <a href={details.repoLink}>GitHub Repo</a>
    </div>
  )
}

export default ProjectCard
