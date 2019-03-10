import React from "react"
import { StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Subscribe from "./subscribe"

const BioWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 150px;
  column-gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    .image-wrapper {
      grid-row: 1;
    }
  }

  .image-wrapper {
    max-width: 150px;
    margin-bottom: 1rem;
  }

  img {
    border-radius: 50%;
  }
`

const Bio = () => (
  <BioWrapper>
    <div class="text-wrapper">
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
    <div className="image-wrapper">
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
              childImageSharp {
                fixed(width: 150, quality: 95) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        )}
      />
    </div>
  </BioWrapper>
)

export default Bio
