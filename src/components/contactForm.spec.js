import React from "react"
import { shallow } from "enzyme"
import ContactForm from "./contactForm"
import fetchMock from "jest-fetch-mock"
import waitUntil from "async-wait-until"

describe("ContactForm", () => {
  it("form submit causes fetch post", done => {
    const mockSuccessResponse = { status: 200 }
    const mockFetchPromise = Promise.resolve(mockSuccessResponse)
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise)

    const wrapper = shallow(<ContactForm />)
    wrapper.setState({
      form: {
        name: "test",
        email: "test@example.com",
        message: "hello world",
      },
    })
    const form = wrapper.find("form")
    form.simulate("submit")

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:
        "form-name=contact&name=test&email=test%40example.com&message=hello%20world",
    })

    global.fetch.mockClear()
    done()
  })

  it("form submission shows success message", async done => {
    const mockSuccessResponse = { status: 200 }
    const mockFetchPromise = Promise.resolve(mockSuccessResponse)
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise)

    const wrapper = shallow(<ContactForm />)
    wrapper.setState({
      form: {
        name: "test",
        email: "test@example.com",
        message: "hello world",
      },
    })
    const form = wrapper.find("form")
    form.simulate("submit")

    await waitUntil(() => wrapper.state("submitSuccess") === true)

    expect(wrapper.text()).toContain("Thanks")

    global.fetch.mockClear()
    done()
  })

  it("validates presence of name", () => {
    jest.spyOn(global, "fetch")

    const wrapper = shallow(<ContactForm />)
    wrapper.setState({
      form: {
        name: "",
        email: "test@example.com",
        message: "hello world",
      },
    })
    const form = wrapper.find("form")
    form.simulate("submit")

    expect(wrapper.text()).toContain("Please enter your name")
    expect(global.fetch).toHaveBeenCalledTimes(0)

    global.fetch.mockClear()
  })

  it("validates presence of email", () => {
    jest.spyOn(global, "fetch")

    const wrapper = shallow(<ContactForm />)
    wrapper.setState({
      form: {
        name: "test",
        email: "",
        message: "hello world",
      },
    })
    const form = wrapper.find("form")
    form.simulate("submit")

    expect(wrapper.text()).toContain("Please enter your email")
    expect(global.fetch).toHaveBeenCalledTimes(0)

    global.fetch.mockClear()
  })

  it("validates incorrect emails", () => {
    jest.spyOn(global, "fetch")

    const wrapper = shallow(<ContactForm />)
    wrapper.setState({
      form: {
        name: "test",
        email: "not an email",
        message: "hello world",
      },
    })
    const form = wrapper.find("form")
    form.simulate("submit")

    expect(wrapper.text()).toContain("Are you sure your email is correct?")
    expect(global.fetch).toHaveBeenCalledTimes(0)

    global.fetch.mockClear()
  })

  it("validates presence of message", () => {
    jest.spyOn(global, "fetch")

    const wrapper = shallow(<ContactForm />)
    wrapper.setState({
      form: {
        name: "test",
        email: "test@example.com",
        message: "",
      },
    })
    const form = wrapper.find("form")
    form.simulate("submit")

    expect(wrapper.text()).toContain("Please enter a message")
    expect(global.fetch).toHaveBeenCalledTimes(0)

    global.fetch.mockClear()
  })
})
