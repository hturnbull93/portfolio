import React from "react"

const ProjectCard = ({ details }) => {
  return (
    <div>
      <h4>{details.title}</h4>
      <h5>{details.tech}</h5>
    </div>
  )
}

export default ProjectCard
