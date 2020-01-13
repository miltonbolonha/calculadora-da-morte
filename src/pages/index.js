import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Calculadora from "../components/calculadora"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { expVida } = data.site.siteMetadata
  const { salarioMinimo } = data.site.siteMetadata
  return(
  <Layout>
    <SEO title="Home" />
    <h1>Olá cidadão</h1>
    <p>Cada centavo roubado, é um minuto da vida de uma pessoa.</p>
    <p>Vamos estimar quantas vidas de trabalhadores, que ganham um salário mínimo, 
      são necessárias para cobrir o roubo de uma corrupção.</p>
    <Calculadora expVida={expVida} salarioMinimo={salarioMinimo} />
      <h2>Expectativa de vida média</h2>
      <h3>{expVida} anos</h3>
      <h2>Salário mínimo</h2>
      <h3>R${salarioMinimo}</h3>
    <Link to="/info/">Saiba como funciona</Link>
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        expVida,
        salarioMinimo
      }
    }
  }
`