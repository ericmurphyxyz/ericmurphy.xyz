import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>
        You can get in touch by sending me a message at{" "}
        <a href="mailto:ericnmurphy@gmail.com">ericnmurphy@gmail.com</a>.
      </p>
      <p>
        I'm on{" "}
        <a
          href="https://twitter.com/ericnmurphy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        as well. I post about web development and anything interesting I'm
        working on.
      </p>
    </Layout>
  )
}

export default ContactPage
