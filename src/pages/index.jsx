import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Watermark from "../components/watermark"

const Home = () => {
  return (
    <Layout>
      <SEO />
      <h1>
        Harry <span>Turnbull.</span>
      </h1>
      <h3>
        <span>Full Stack Developer. </span>
        <span>Based in London UK.</span>
      </h3>
      <section>
        <Watermark>
          <h2>About.</h2>
        </Watermark>
        <p>
          I am a Full Stack developer, looking for opportunities to continue to
          learn, challenge myself and work with great people to build useful
          apps that consumers enjoy using.
        </p>
        <p>
          I'm passionate about the intersection of technology and creativity. I
          am self-taught and have been working as a Web Designer for the past
          three years, which has allowed me to gain skills in Front-End design
          and implementation, as well as UI/UX design.
        </p>
        <p>
          I have recently completed training at{" "}
          <a href="https://makers.tech/">Makers Academy</a> (London's leading
          programming bootcamp), to learn best practices, tools and
          methodologies.
        </p>
      </section>
    </Layout>
  )
}

export default Home
