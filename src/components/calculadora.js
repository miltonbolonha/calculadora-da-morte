import React, { useState } from 'react'
import { graphql } from "gatsby"

const Calculadora = ({ expVida, salarioMinimo }) => {
  const x = expVida
  const s = salarioMinimo
  const v = s*12*x
  const [mortes, setMortes] = useState(0);
  function handleMortes(e){
    e.preventDefault()
    const r = e.target.value
    if(!isNaN(r) && r>0){
      const f = Math.ceil(r/v*1000000)
      setMortes(f)
    }else{
      return setMortes('0')
    }
  }
  function handleLimpar(e){
    e.preventDefault()
    setMortes(0)
  }
  return(
    <>
      <form action="#">
        <label htmlFor="number">Insira valor roubado em milhões</label>
        <input 
          type="text" 
          name="number" 
          onChange={e=>handleMortes(e)} 
        />
        <br />
        <button onClick={e=>handleLimpar(e)}>Limpar</button>
      </form>
      <h2>{mortes} vidas foram utilizadas neste roubo.</h2>
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