import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import * as S from "../styles/components/header"

import Logo from "../../static/assets/images/calculadora-da-morte-logo.png"


const Header = ({ siteTitle }) => (
  <S.HeaderWrapper>
    <S.Header>
      <h1>
        <Link to="/">
          <img src={Logo}  width="420px" height="80px" alt="Develop with Gatsby"  title="{siteTitle}" /> 
        </Link>
      </h1>
    </S.Header>
  </S.HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
