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
    }
  }

  handleChange = e => {
    this.setState({ form: { [e.target.name]: e.target.value } })
  }

  handleSubmit = e => {
    if (e) e.preventDefault()

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
    console.log("this.state.submitSuccess :>> ", this.state.submitSuccess)
    if (this.state.submitSuccess) {
      return <p>Thanks</p>
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
            Name.
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
            Email.
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
            Message.
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
