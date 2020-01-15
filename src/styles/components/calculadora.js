import styled from "styled-components"

import Tooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles'

import Input from "../../../static/assets/images/input.png"

export const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#000000',
    color: '#d61d1d',
    maxWidth: 220,
    fontSize: 14,
    border: '1px solid #f47474',
    textAlign: 'center',
    padding: '15px 15px 0',
  },
}))(Tooltip);

export const CalcForm = styled.form`
  position: relative;

  &:before{
    content: 'R$';
    display: inline-block;
    width: 50px;
    font-size: 20px;
    color: #f47474;
    position: absolute;
    left: 12px;
    top: 30px;
    height: 56px;
    line-height: 56px;
  }
`
export const CalcInput = styled.input`
  background-image: url(${Input});
  background-repeat: no-repeat;
  width: 478px;
  min-height: 66px;
  color: #b02020;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.7);
  font-size: 28px;
  padding-left: 60px;
  padding-bottom: 14px;
  margin-top: 25px;
`

export const Mortes = styled.h3`
  color: #d61d1d;
  font-size: 42px;
  font-weight: 900;
  line-height: 40px;
`

export const MortesLabel = styled.h2`
  color: #f47474;
  font-size: 24px;
  font-weight: 700;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.7);
`

export const CalcLabel = styled.p`
  color: #ffffff;
  font-size: 24px;
  text-align: center;
  position: absolute;
  right: 0;
  top: 29px;
  width: 149px;
  height: 56px;
  line-height: 56px;
  cursor: help;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.7);
`

export const RouboInfo = styled.p`
  color: #864646;
  font-size: 14px;
  text-align: center;
  line-height: 4px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.7);
`