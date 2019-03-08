import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Spring } from "react-spring/renderprops"

const HeaderWrapper = styled.header`
  margin: 1.45rem auto 1.45rem;
  padding: 1.45rem 1.0875rem 0.75rem;
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

const Header = ({ siteTitle, location }) => (
  <Spring
    from={{ height: location.pathname === "/" ? 25 : 0 }}
    to={{ height: location.pathname === "/" ? 0 : 25 }}
  >
    {styles => (
      <HeaderWrapper>
        <h1 style={{ overflow: "hidden", ...styles }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </HeaderWrapper>
    )}
  </Spring>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
