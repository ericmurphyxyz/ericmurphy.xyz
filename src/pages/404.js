import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <h2>Page Not Found</h2>
    <p>
      Sorry, this page doesn't exist. If you're lost, you can always try{" "}
      <Link to="/">returning to the home page.</Link>
    </p>
  </Layout>
)

export default NotFoundPage
