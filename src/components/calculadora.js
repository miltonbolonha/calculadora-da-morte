import React, { useState } from 'react'
import { graphql } from "gatsby"

import * as S from "../styles/components/calculadora"

const Calculadora = ({ expVida, salarioMinimo }) => {
  const x = expVida
  const s = salarioMinimo
  const v = s*12*x
  const [mortes, setMortes] = useState(0);
  const [dias, setDias] = useState(0);
  const [anos, setAnos] = useState(0);

  function handleMortes(e){
    e.preventDefault()
    const r = e.target.number.value
    const a = r*x
    const d = r*x*356
    
    if(!isNaN(r) && r>0){
      const f = Math.ceil(r/v*1000000)
      setMortes(checkThousand(f))
      setDias(checkThousand(d))
      setAnos(checkThousand(a))
    }else{
      return setMortes('0')
    }
  }
  
  function checkThousand(x){
    switch (true) {
      case (x > 9999 && x <= 99999):
        return '+'+Math.ceil(x/1000)+'k'
      case (x > 99999 && x <= 999999):
        return '+'+Math.ceil(x/10000)+'m'
      case (x >= 999999):
        return '∞'
      default:
        return x
    }
  }

  return(
    <>
      <S.NumbersWrapper>
        <S.NumbersInner>A cada:</S.NumbersInner>
          <S.NumbersInner>
            <S.LifesPerMin>15 min</S.LifesPerMin>
          </S.NumbersInner>
        <S.NumbersInner>uma vida é consumida<br />
          por esse roubo</S.NumbersInner>
      </S.NumbersWrapper>
          <S.NumbersInner>Para pagar temos que trabalhar:</S.NumbersInner>

        <S.MultipleNumbersWrapper>
          <S.MultipleNumbersInner>{dias} <span>dias</span></S.MultipleNumbersInner>
          <S.MultipleNumbersInner>{anos} <span>anos</span></S.MultipleNumbersInner>
          <S.MultipleNumbersInner>{mortes} <span>vidas</span></S.MultipleNumbersInner>
        </S.MultipleNumbersWrapper>
      
      <S.NumbersWrapperMod>Insira o valor roubado:</S.NumbersWrapperMod>
      <S.CalcForm onSubmit={e=>handleMortes(e)}>
        <S.CalcInput 
          type="number"
          name="number"
          inputMode='numeric' 
        />
        <S.CalcSubmit value="Calcular" type="submit" />
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