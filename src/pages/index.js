import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/eric-murphy.jpg" }) {
        childImageSharp {
          fixed(width: 290) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO />
      <Img fixed={data.image.childImageSharp.fixed} />
      <h1>Hey! I'm Eric Murphy.</h1>
      <p>
        I build <strong>blazing-fast, modern websites and web apps</strong> that
        are a joy to use.
      </p>
      <p>
        Ready to get your project started? Send me a message at{" "}
        <a href="mailto:ericnmurphy@gmail.com">ericnmurphy@gmail.com</a> to get
        things rolling.
      </p>
      <p>
        {/* I also make videos teaching people how to become better, more effective developers. */}
        When I have some free time, I'm usually on{" "}
        <a
          href="https://twitter.com/ericnmurphy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        as well.
      </p>
    </Layout>
  )
}

export default IndexPage
