import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Container = styled.section`
  height: 100vh;
`

const Hero = styled.header`
  display: grid;
  height: 100%;
  max-width: 1120px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4em;
  align-items: center;
`

const Column = styled.div``

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Hero>
        <Column>
          <h1>Hey! I'm Eric Murphy.</h1>
          <p>
            I build blazing-fast, modern websites and webapps that are a joy to
            use.
          </p>
          <p>
            I also make videos teaching people how to become better, more
            effective developers.
          </p>
          <p>
            Ready to get your project started? Send me a message at{" "}
            <a href="mailto:ericnmurphy@gmail.com">ericnmurphy@gmail.com</a> to
            get things rolling.
          </p>
        </Column>
        <Column>
          <Image />
        </Column>
      </Hero>
    </Container>
  </Layout>
)

export default IndexPage
