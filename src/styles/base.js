import { createGlobalStyle } from "styled-components"

const BaseStyles = createGlobalStyle`
  input{
    border: 0;
    background: transparent;
  }
  *,p,h1,h2,h3,input{
    color: #dcdcdc;
    text-shadow: 2px 2px 1px rgba(0,0,0,0.7);
  }
  body{
    overflow-y: scroll;
  }
  p{
    text-align: justify;
    margin-bottom: 20px;
  }
  a{
    color: #dcdcdc;
    &:hover{
      color: #ff6000;
    }
  }
  strong{
    font-weight: 900;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.47);
  }
  ::-moz-selection { background: #959595; color: #dcdcdc; }
  ::selection { background: #959595; color: #dcdcdc; }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance:textfield;
  }
`

export default BaseStyles