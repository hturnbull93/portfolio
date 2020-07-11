import React from "react"
import { shallow, mount } from "enzyme"
import axios from "axios"
import ContactForm from "./contactForm"
import fetchMock from "jest-fetch-mock"

describe("ContactForm", () => {
  it("form submit causes axios post", done => {
    const mockSuccessResponse = { status: 200 }
    const mockFetchPromise = Promise.resolve(mockSuccessResponse)
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise)

    const wrapper = mount(<ContactForm />)
    wrapper.setState({
      name: "test",
      email: "test@example.com",
      message: "hello world",
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
})
