import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 755px;
  padding: 0px 1.0875rem 1.45rem;

  a {
    color: #00b1ff;
    text-decoration: none;
    transition: opacity 200ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper>
          <main>{children}</main>
        </Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
