import styled from "styled-components"
import RedBox from "../../../static/assets/images/box-footer.png"


export const SummaryBox = styled.section`
  margin: 25px 0;
`


export const SummaryParagraph = styled.section`
  font-size: 13px;
  text-align: center;
`


export const InfoBoxWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
`

export const InfoBox = styled.div`
  background-image: url(${RedBox});
  background-repeat: no-repeat;
  width: 194px;
  height: 134px;
`

export const InfoWrapper = styled.div`
  padding-top: 25px;
  text-align: center;
`

export const InfoTitle = styled.h2`
  color: #864646;
  font-size: 14px;
  font-weight: 400;
`

export const InfoStr = styled.h3`
  color: #b02020;
  font-size: 18px;
  font-weight: 700;
  margin-bottom:10px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.7);
`