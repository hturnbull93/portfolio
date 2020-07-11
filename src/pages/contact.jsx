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
        email at <a href="mailto:hturnbull@live.co.uk">hturnbull@live.co.uk</a>.
      </p>
      <p>
        tweet at <a href="https://twitter.com/hturnbull">@hturnbull93</a>.
      </p>
      <p>
        connect on{" "}
        <a href="https://www.linkedin.com/in/harry-turnbull/">LinkedIn</a>.
      </p>
      <p>
        follow on <a href="https://github.com/hturnbull93/">GitHub</a>.
      </p>
      <ContactForm />
    </Layout>
  )
}

export default Contact
