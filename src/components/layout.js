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
      <Header siteTitle={data.site.siteMetadata.title} />
      <S.LayoutWrapper>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Desenvolvido por
          {` `}
          <a href="https://github.com/bolonhadev/">BolonhaDev</a>
        </footer>
      </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
