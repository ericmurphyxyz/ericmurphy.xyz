import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  margin: 1.45rem auto 1.45rem;
  padding: 1.45rem 1.0875rem;
  max-width: 755px;

  h1 {
    margin: 0;
    font-size: 1em;

    a {
      color: #68c2e5;
      text-decoration: none;
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
