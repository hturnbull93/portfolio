import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import Watermark from "../components/watermark"

const Contact = () => {
  return (
    <Layout>
      <Watermark>
        <h1>Contact.</h1>
      </Watermark>
      <p>
        Tweet at <a href="https://twitter.com/hturnbull">@hturnbull93</a>.
      </p>
      <p>
        Connect on{" "}
        <a href="https://www.linkedin.com/in/harry-turnbull/">LinkedIn</a>.
      </p>
      <p>
        Follow on <a href="https://github.com/hturnbull93/">GitHub</a>.
      </p>
      <p>Or fill in the form.</p>
      <ContactForm />
    </Layout>
  )
}

export default Contact
