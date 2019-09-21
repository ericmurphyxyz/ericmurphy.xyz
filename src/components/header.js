import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #f3f6f9;
  z-index: 99;

  @media (min-width: 768px) {
    position: fixed;
  }
`

const HeaderContent = styled.header`
  display: flex;
  max-width: 1140px;
  padding: 0 20px;
  margin: 0 auto;
`

const Navigation = styled.nav`
  display: flex;
  line-height: initial;

  a {
    padding: 1em 0.75em;
  }
`

const Logo = styled.h1`
  font-size: inherit;
  line-height: initial;
  margin: 0;
  padding: 1em 0.75em;
  padding-left: 0;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContent>
      <Logo>
        <Link to="/">{siteTitle}</Link>
      </Logo>
      <Navigation>
        <Link to="/about">About</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/contact">Contact</Link>
      </Navigation>
    </HeaderContent>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
