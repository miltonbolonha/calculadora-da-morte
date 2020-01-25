import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import * as S from "../styles/components/layout"

import SettingStyles from "../styles/settings"
import GenericStyles from "../styles/generic"
import BaseStyles    from "../styles/base"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GenericStyles />
      <BaseStyles />
      <SettingStyles />
      <S.LayoutWrapper>
        <S.LayoutInner>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <S.Footer>
            © {new Date().getFullYear()}, Desenvolvido por
            {` `}
            <a href="https://github.com/bolonhadev/" target="_blank" rel="noopener noreferrer">BolonhaDev</a>
          </S.Footer>
        </S.LayoutInner>
      </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
