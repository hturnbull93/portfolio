import React from "react"
import style from "./projectCard.module.scss"
import SmartLink from "./smartLink"

const ProjectCard = ({ details }) => {
  let repoLink, deployLink
  if (details.repoLink) {
    repoLink = <SmartLink href={details.repoLink}>GitHub Repo</SmartLink>
  }
  if (details.deployLink) {
    deployLink = <SmartLink href={details.deployLink}>See it live</SmartLink>
  }
  const imgSrc = "/projects/" + details.img

  return (
    <div className={style.card}>
      <img src={imgSrc} alt={details.title} />
      <div className={style.card_content}>
        <h3 className={style.title}>{details.title}.</h3>
        <div className={style.labels}>
          <h4 className="tech">{details.tech}</h4> /{" "}
          <h4 className="label">{details.label}</h4>
        </div>
        <p>{details.description}</p>
        <div className={style.card_links}>
          {deployLink}
          {repoLink}
          {/* <SmartLink to={details.link}>Read more</SmartLink> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
