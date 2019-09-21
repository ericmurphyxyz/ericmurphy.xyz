import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Container from "../components/container"
import Row from "../components/row"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "eric-murphy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row>
          <div>
            <Img fluid={data.image.childImageSharp.fluid} />
          </div>
          <div>
            <h1>Hey! I'm Eric Murphy.</h1>
            <p>
              I build blazing-fast, modern websites and webapps that are a joy
              to use.
            </p>
            <p>
              I also make videos teaching people how to become better, more
              effective developers.
            </p>
            <p>
              Ready to get your project started? Send me a message at{" "}
              <a href="mailto:ericnmurphy@gmail.com">ericnmurphy@gmail.com</a>{" "}
              to get things rolling.
            </p>
          </div>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
