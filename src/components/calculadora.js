import React, { useState } from 'react'
import { graphql } from "gatsby"

import Button from '@material-ui/core/Button'

import * as S from "../styles/components/calculadora"

const Calculadora = ({ expVida, salarioMinimo }) => {
  const x = expVida
  const s = salarioMinimo
  const v = s*12*x
  const [mortes, setMortes] = useState(0);
  const [roubado, setRoubo] = useState(0);
  function handleMortes(e){
    e.preventDefault()
    setRoubo(e.target.value)
    const r = e.target.value
    if(!isNaN(r) && r>0){
      const f = Math.ceil(r/v*1000000)
      setMortes(f)
    }else{
      return setMortes('0')
    }
  }
  return(
    <>
      <S.Mortes>{mortes}</S.Mortes>
      <S.MortesLabel>Vidas roubadas</S.MortesLabel>
      <S.CalcForm action="#">
        <S.CalcInput 
          type="number"
          name="number"
          inputMode='numeric' 
          onChange={e=>handleMortes(e)} 
        />
        <S.CalcLabel>
          <S.HtmlTooltip
            title={
              <p>Lava-Jato já fez acordo para recuperar mais de 30 bilhões. <br />
              <strong>30bi = 31660 vidas roubadas</strong></p>
            }>
            <Button>Exemplo</Button>
          </S.HtmlTooltip>
        </S.CalcLabel>
        <S.RouboInfo>{roubado ? roubado : 0} Milhões em desvios, roubos, propinas</S.RouboInfo>
      </S.CalcForm>
    </>
  )
}

export default Calculadora

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