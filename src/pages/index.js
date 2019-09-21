import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Hero = styled.header`
  display: grid;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4em;
  align-items: center;
`

const Column = styled.div``

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Column>
        <Image />
      </Column>
      <Column>
        <h1>Hey, I'm Eric Murphy.</h1>
        <p>
          I build blazing-fast, modern websites and webapps that are a joy to
          use.
        </p>
        <p>
          I also make videos teaching people how to become better, more
          effective developers.
        </p>
      </Column>
    </Hero>
  </Layout>
)

export default IndexPage
