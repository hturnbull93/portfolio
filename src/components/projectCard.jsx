import React from "react"

const ProjectCard = ({ details }) => {
  let repoLink, deployLink
  if (details.repoLink) {
    repoLink = <a href={details.repoLink}>GitHub Repo</a>
  }
  if (details.deployLink) {
    deployLink = <a href={details.deployLink}>See it live</a>
  }

  return (
    <div>
      <img src={details.img} alt={details.title} />
      <div>
        <h4>{details.title}</h4>
        <h5>{details.tech}</h5>
        <p>{details.description}</p>
        {repoLink}
        {deployLink}
      </div>
    </div>
  )
}

export default ProjectCard
