import { createGlobalStyle } from "styled-components"

const BaseStyles = createGlobalStyle`
  input{
    border: 0;
    background: transparent;
  }
  *,p,h1,h2,h3,input{
    color: #f47474;
  }
  body{
    overflow-y: scroll;
  }
  p{
    text-align: justify;
    margin-bottom: 20px;
  }
  a{
    color: #d61d1d;
    &:hover{
      color: #b02020;
    }
  }
  strong{
    font-weight: 900;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.47);
  }
  ::-moz-selection { background: #b02020; color: #f47474; }
  ::selection { background: #b02020; color: #f47474; }
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