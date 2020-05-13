import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h2>Contact</h2>
      <p>
        You can get in touch by sending me a message at{" "}
        <a href="mailto:ericnmurphy@gmail.com">ericnmurphy@gmail.com</a>.
      </p>
    </Layout>
  )
}

export default ContactPage
