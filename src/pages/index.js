import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Container from "../components/container"
import Row from "../components/row"
import SEO from "../components/seo"

const Photo = styled(Img)`
  margin-bottom: 1em;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "eric-murphy.jpg" }) {
        childImageSharp {
          fixed(width: 290, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO />
      <Container>
        <Row>
          <div>
            <Photo fixed={data.image.childImageSharp.fixed} />
            <h1>Hey! I'm Eric Murphy.</h1>
            <p>
              I build{" "}
              <strong>blazing-fast, modern websites and web apps</strong> that
              are a joy to use.
            </p>
            <p>
              Ready to get your project started? Send me a message at{" "}
              <a href="mailto:ericnmurphy@gmail.com">ericnmurphy@gmail.com</a>{" "}
              to get things rolling.
            </p>
            <p>
              I also make videos teaching people how to become better, more
              effective developers. When I have some free time, I'm usually on{" "}
              <a
                href="https://twitter.com/ericnmurphy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{" "}
              as well.
            </p>
          </div>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
