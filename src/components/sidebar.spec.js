import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Sidebar from "./sidebar"
import { Link } from "gatsby"

describe("Sidebar", () => {
  describe("internal navigation", () => {
    it("renders Link to about", () => {
      const wrapper = shallow(<Sidebar />)
      const link = <Link to="/about">About</Link>
      expect(wrapper.containsMatchingElement(link)).toEqual(true)
    })

    it("renders Link to home", () => {
      const wrapper = shallow(<Sidebar />)
      const link = <Link to="/">Home</Link>
      expect(wrapper.containsMatchingElement(link)).toEqual(true)
    })
  })
  describe("external links", () => {
    it("renders a link to my cv", () => {
      const wrapper = shallow(<Sidebar />)
      const link = "a[href='https://github.com/hturnbull93/cv']"
      expect(wrapper.find(link).length).toEqual(1)
    })

    it("renders a link to my Twitter", () => {
      const wrapper = shallow(<Sidebar />)
      const link = "a[href='https://twitter.com/hturnbull']"
      expect(wrapper.find(link).length).toEqual(1)
    })

    it("renders a link to my LinkedIn", () => {
      const wrapper = shallow(<Sidebar />)
      const link = "a[href='https://www.linkedin.com/in/harry-turnbull']"
      expect(wrapper.find(link).length).toEqual(1)
    })

    it("renders a link to my GitHub", () => {
      const wrapper = shallow(<Sidebar />)
      const link = "a[href='https://github.com/hturnbull93']"
      expect(wrapper.find(link).length).toEqual(1)
    })

    it("renders a link to my Medium Blog", () => {
      const wrapper = shallow(<Sidebar />)
      const link = "a[href='https://medium.com/@hturnbull93']"
      expect(wrapper.find(link).length).toEqual(1)
    })
  })
})
