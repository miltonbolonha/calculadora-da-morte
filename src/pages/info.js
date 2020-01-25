import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as S from "../styles/pages/info"

const SecondPage = () => (
  <Layout>
    <S.InnerInfo>
      <SEO title="Info" />
      <h2>O que é a Calculadora da Morte?</h2>
      <p>É uma forma de podermos visualizar o mal que a corrupção faz.
        A calculadora transforma os roubos ao nossos bolsos (chamado de 'cofres públicos')
        em vidas humanas.
      </p>
      <h2>Como Funciona?</h2>
      <p>O algoritmo calcula o salário mínimo e multiplica pela expectativa de vida brasileira.
        Com isso temos a quantia, em Real, da vida dos assalariados. Então, a quantia roubada é 
        dividida pelo preço de uma vida, conseguindo calcular quantas vidas são necessárias para 
        cobrir o roubo.
      </p>
      <h2>Valor científico e como surgiu</h2>
      <p>A calculadora da morte é uma iniciativa sem caráter científico. <br />
        A ideia surgiu após o desenvolvedor ouvir repetidas vezes nos rádios que
        a corrupção muitas vezes é pior do que os crimes comuns. O que parecia ser mais do 
        que evidente.
      </p>
      <h2>Ajude a aprimorar</h2>
      <p>Se você tem uma ideia de como melhorar o algoritmo, nos mande uma mensagem no endereço: <br />
      miltonbolonha@gmail.com</p>
      <Link to="/">Voltar para a calculadora</Link>
    </S.InnerInfo>
  </Layout>
)

export default SecondPage
