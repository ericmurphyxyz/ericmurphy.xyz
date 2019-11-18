import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "./container"

const HeaderWrapper = styled.header`
  background-color: #f6f6f6;
`

const Navigation = styled.nav`
  display: flex;
  line-height: initial;

  a {
    padding: 1em 0.75em;
    color: hsla(0, 0%, 0%, 0.8);
  }
`

const Logo = styled.h1`
  font-size: inherit;
  line-height: initial;
  margin: 0;
  padding: 1em 0.75em 1em 0;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <Logo>
        <Link to="/">{siteTitle}</Link>
      </Logo>
      <Navigation>
        <Link to="/about">About</Link>
        {/* <Link to="/videos">Videos</Link> */}
        <Link to="/contact">Contact</Link>
      </Navigation>
    </Container>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
