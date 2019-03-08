import React from "react"

import Subscribe from "./subscribe"

const Bio = () => (
  <>
    <p>
      Want to become a better developer?{" "}
      <span role="img" aria-label="Laptop">
        💻
      </span>{" "}
      I'm Eric and I write about web development &amp; making web apps to help
      you level up your skills and learn to build cool things online.
    </p>
    <p>
      Subscribe{" "}
      <span role="img" aria-label="Letter">
        💌
      </span>{" "}
      below and I'll send you an email every Friday about how to become a better
      developer and create some cool projects.
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
  </>
)

export default Bio
