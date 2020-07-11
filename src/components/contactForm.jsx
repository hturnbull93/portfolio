import React from "react"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    if (e) e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(res => console.log("res :> ", res))
      .catch(error => alert(error))
  }

  render = () => {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label htmlFor="bot-field">
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label htmlFor="name">
            Your name:
            <br />
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Your email:
            <br />
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            Message:
            <br />
            <textarea name="message" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
  }
}

export default ContactForm
