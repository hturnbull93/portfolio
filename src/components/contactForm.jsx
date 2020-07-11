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
      form: {
        name: "",
        email: "",
        message: "",
      },
      submitSuccess: false,
      nameValidationError: false,
      emailValidationError: false,
      messageValidationError: false,
    }
  }

  handleChange = e => {
    this.setState({ form: { [e.target.name]: e.target.value } })
  }

  validateForm = () => {
    const { name, email, message } = this.state.form
    let anyError = false
    if (name === "") {
      this.setState({ nameValidationError: true })
      anyError = true
    }
    if (email === "") {
      this.setState({ emailValidationError: true })
      anyError = true
    }
    if (message === "") {
      this.setState({ messageValidationError: true })
      anyError = true
    }
    return anyError
  }

  handleSubmit = e => {
    if (e) e.preventDefault()
    if (this.validateForm()) return

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state.form }),
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ submitSuccess: true })
        }
      })
      .catch(error => alert(error))
  }

  render = () => {
    const {
      submitSuccess,
      nameValidationError,
      emailValidationError,
      messageValidationError,
    } = this.state
    if (submitSuccess) {
      return <div>Thanks.</div>
    }

    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input
          aria-label="form-name"
          type="hidden"
          name="form-name"
          value="contact"
        />
        <p hidden>
          <label id="bot-field-label" htmlFor="bot-field">
            Don’t fill this out:{" "}
          </label>
          <input
            aria-labelledby="name-label"
            name="bot-field"
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label id="name-label" htmlFor="name">
            {nameValidationError ? "Please enter your name" : "Name"}.
          </label>
          <br />
          <input
            aria-labelledby="name-label"
            type="text"
            name="name"
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label id="email-label" htmlFor="email">
            {emailValidationError ? "Please enter your email" : "email"}.
          </label>
          <br />
          <input
            aria-labelledby="email-label"
            type="email"
            name="email"
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label id="message-label" htmlFor="message">
            {messageValidationError ? "Please enter a message" : "Message"}.
          </label>
          <br />
          <textarea
            aria-labelledby="message-label"
            name="message"
            onChange={this.handleChange}
          />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
  }
}

export default ContactForm
