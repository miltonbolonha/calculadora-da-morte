import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Calculadora from "../components/calculadora"
import SEO from "../components/seo"

import * as S from "../styles/pages/index"

const IndexPage = ({ data, props }) => {
  const { expVida } = data.site.siteMetadata
  const { salarioMinimo } = data.site.siteMetadata
  return(
  <Layout>
    <SEO title="Home" />
    <S.SummaryBox>
      <S.SummaryBoxInner>
        <S.SummaryParagraph>Cada centavo roubado, é um minuto da vida<br />de uma pessoa.</S.SummaryParagraph>
        <S.SummaryParagraph>Insira abaixo o total do roubo em milhões e estime o tempo
          e as vidas que a corrupção<br />tira das pessoas.</S.SummaryParagraph>
      </S.SummaryBoxInner>
        <S.SummaryParagraph>Exemplo:</S.SummaryParagraph>
        <S.ExampleWrapper>
          <S.ExampleInner><strong>1 milhão de reais</strong> equivale a <strong>80 anos</strong> e 
          a expectativa de vida no Brasil é de <strong>76 anos</strong>. 
          Ou seja, 1 milhão roubados tira mais que uma vida.</S.ExampleInner>
        </S.ExampleWrapper>
    </S.SummaryBox>
    <Calculadora expVida={expVida} salarioMinimo={salarioMinimo} />
    <S.PageLink to="/info/">Saiba como funciona</S.PageLink>
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