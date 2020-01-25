import styled from "styled-components"
import media from "styled-media-query"
import Noise from "../../../static/assets/images/noisy-texture.png"

export const LayoutWrapper = styled.div`
  margin: 15px auto;
  max-width: 460px;
  padding-top: 0;
  text-align: center;

  border: 1px solid #212f4a;
  border-radius: 25px;

  background-color: #1f3253;
  z-index: 0;
  box-shadow: 0 0 150px 50px  rgba(0, 0, 0, 0.5), inset 0px -25px 98px 58px rgba(0, 0, 0, 0.5);

  position: relative;

  &:before{
    background: linear-gradient(rgba(31,50,83,1) 0%, rgba(24,36,62,1) 50%, rgba(20,30,50,1) 80%);
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    z-index: 0;
  }
  &:after{
    background-image: url(${Noise});
    background-repeat: repeat;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0.3;
  }

  ${media.lessThan('460px')`
    margin: 0;
    border-radius: 0;
  `}
`
export const LayoutInner = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  position: relative;
  z-index: 1;
`
export const Footer = styled.footer`
  color: black;
  font-size: 14px;
  text-shadow: -3px -3px 5px rgba(141,141,141,0.2), 4px 4px 4px rgba(0,0,0,1);

  & a{
    color:#ff6000;
    text-shadow: -3px -3px 5px rgba(141,141,141,0.2), 4px 4px 4px rgba(0,0,0,1);
  }
`