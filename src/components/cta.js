import React, { useState } from "react"
import styled from "styled-components"

import Subscribe from "./subscribe"

const CtaWrapper = styled.footer`
  margin-top: 3.5em;
  margin-bottom: 3em;
`

const Cta = () => {
  return (
    <CtaWrapper>
      <p>
        <strong>Learned something new?</strong> Subscribe to my weekly
        newsletter and I'll send you an email every Friday about how to become a
        better developer and make cool things online.
      </p>
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
