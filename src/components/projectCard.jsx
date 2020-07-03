import React from "react"
import style from "./projectCard.module.scss"
import SmartLink from "./smartLink"

const ProjectCard = ({ details }) => {
  const { frontmatter, fields } = details

  let repoLink, deployLink
  if (frontmatter.repoLink) {
    repoLink = <SmartLink href={frontmatter.repoLink}>GitHub Repo</SmartLink>
  }
  if (frontmatter.deployLink) {
    deployLink = (
      <SmartLink href={frontmatter.deployLink}>See it live</SmartLink>
    )
  }

  const imgSrc = "/projects/" + frontmatter.img

  return (
    <div className={style.card}>
      <img src={imgSrc} alt={frontmatter.title} />
      <div className={style.card_content}>
        <h3 className={style.title}>{frontmatter.title}.</h3>
        <div className={style.labels}>
          <h4 className="tech">{frontmatter.tech}</h4> /{" "}
          <h4 className="label">{frontmatter.label}</h4>
        </div>
        <p>{frontmatter.description}</p>
        <div className={style.card_links}>
          {deployLink}
          {repoLink}
          <SmartLink to={fields.slug}>Read more</SmartLink>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
