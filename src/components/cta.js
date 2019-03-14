import React from "react"
import styled from "styled-components"

import Subscribe from "./subscribe"

const CtaWrapper = styled.footer`
  margin-top: 3.5em;
  margin-bottom: 3em;
`

const Cta = ({ location }) => {
  return (
    <CtaWrapper>
      {location === `/tutorials-to-real-life/` ? (
        <p>
          <strong>Looking for something new to build?</strong> I'm launching a
          tutorial series soon about learning Gatsby (a great React framework
          for building static sites)! Beyond just a tutorial, I'll help you
          build your own personal website and host it for free. Drop your email
          below and I'll send you an email when it's finished!
        </p>
      ) : (
        <p>
          <strong>Learned something new?</strong> Subscribe to my weekly
          newsletter and I'll send you an email every Friday about how to become
          a better developer and make cool things online.
        </p>
      )}
      <Subscribe />
      <p>
        Also, you should follow me on Twitter{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/ericnmurphy"
        >
          @ericnmurphy
        </a>
        . I post a lot about web development. You'll like it.
      </p>
    </CtaWrapper>
  )
}

export default Cta
