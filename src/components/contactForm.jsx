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
      nameError: false,
      emailError: false,
      messageError: false,
    }
  }

  handleChange = e => {
    const newState = this.state
    newState.form[e.target.name] = e.target.value
    this.setState({ ...newState })
  }

  validateForm = () => {
    const { name, email, message } = this.state.form
    let messageError = false
    let emailError = false
    let nameError = false

    if (name === "") nameError = "Please enter your name"
    if (email !== "" && this.validateEmail(email))
      emailError = "Are you sure your email is correct?"
    if (email === "") emailError = "Please enter your email"
    if (message === "") messageError = "Please enter a message"

    this.setState({
      messageError,
      emailError,
      nameError,
    })

    const errors = [messageError, emailError, nameError]
    return errors.some(error => error !== false)
  }

  validateEmail = email => !/\S+@\S+/.test(email)

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
    const { submitSuccess, nameError, emailError, messageError } = this.state
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
            {nameError ? nameError : "Name"}.
          </label>
          <br />
          <input
            aria-labelledby="name-label"
            type="text"
            name="name"
            onChange={this.handleChange}
            className={messageError ? "derp" : null}
          />
        </p>
        <p>
          <label id="email-label" htmlFor="email">
            {emailError ? emailError : "Email."}
          </label>
          <br />
          <input
            aria-labelledby="email-label"
            type="email"
            name="email"
            onChange={this.handleChange}
            className={messageError ? "derp" : null}
          />
        </p>
        <p>
          <label id="message-label" htmlFor="message">
            {messageError ? messageError : "Message"}.
          </label>
          <br />
          <textarea
            aria-labelledby="message-label"
            name="message"
            onChange={this.handleChange}
            className={messageError ? "derp" : null}
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
