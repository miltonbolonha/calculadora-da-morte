import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Calculadora from "../components/calculadora"
import SEO from "../components/seo"

import * as S from "../styles/pages/index"

const IndexPage = ({ data }) => {
  const { expVida } = data.site.siteMetadata
  const { salarioMinimo } = data.site.siteMetadata
  return(
  <Layout>
    <SEO title="Home" />
    {/* <h1>Olá cidadão</h1> */}
    <Calculadora expVida={expVida} salarioMinimo={salarioMinimo} />
    <S.SummaryBox>
      <S.SummaryParagraph>Cada centavo roubado, é um minuto da vida de uma pessoa.</S.SummaryParagraph>
      <S.SummaryParagraph>Estime quantas vidas de trabalhadores que ganham um salário mínimo 
        são necessárias para cobrir o roubo de uma corrupção.</S.SummaryParagraph>
    </S.SummaryBox>
    <S.InfoBoxWrapper>
      <S.InfoBox>
        <S.InfoWrapper>
          <S.InfoStr>{expVida} anos</S.InfoStr>
          <S.InfoTitle>Expectativa de vida<br />no Brasil</S.InfoTitle>
        </S.InfoWrapper>
      </S.InfoBox>
      <S.InfoBox>
        <S.InfoWrapper>
          <S.InfoStr>R${salarioMinimo},00</S.InfoStr>
          <S.InfoTitle>Salário mínimo</S.InfoTitle>
        </S.InfoWrapper>
      </S.InfoBox>
    </S.InfoBoxWrapper>
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