import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import * as S from "../styles/components/header"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "calculadora-da-morte-logotipo.png" }) {
        childImageSharp {
          fluid(maxWidth: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return(
  <S.HeaderWrapper>
    <S.Header>
      <h1>
        <Link to="/">
          <S.LogoImg fluid={data.placeholderImage.childImageSharp.fluid} alt="Develop with Gatsby"  title={siteTitle} />
        </Link>
      </h1>
    </S.Header>
  </S.HeaderWrapper>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
