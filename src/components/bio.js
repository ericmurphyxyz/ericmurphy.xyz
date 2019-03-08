import React from "react"
import { StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Subscribe from "./subscribe"

const BioWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  column-gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  .image-wrapper {
    max-width: 150px;
    margin-bottom: 1.5rem;
  }

  img {
    border-radius: 50%;
  }
`

const Bio = () => (
  <BioWrapper>
    <div className="image-wrapper">
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        )}
      />
    </div>
    <div>
      <h1>Want to become a better developer?</h1>{" "}
      <p>
        I'm Eric and I write about front-end development to help you level up
        your skills and learn to build cool things online.{" "}
        <span role="img" aria-label="Laptop">
          💻
        </span>
      </p>
      <p>
        Subscribe{" "}
        <span role="img" aria-label="Letter">
          💌
        </span>{" "}
        below and I'll send you an email every Friday about how to become a
        better developer and build your skills!
      </p>
      <Subscribe />
      <p>
        I also post a lot on Twitter, follow me at{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/ericnmurphy"
        >
          @ericnmurphy
        </a>
        .
      </p>
    </div>
  </BioWrapper>
)

export default Bio
