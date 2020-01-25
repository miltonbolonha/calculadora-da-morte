import styled from "styled-components"
import { Link } from "gatsby"

export const SummaryBox = styled.section`
  margin: 25px 0;
`

export const SummaryParagraph = styled.p`
  font-size: 13px;
  text-align: center;
  max-width: 300px;
  margin: 5px auto;
`
export const SummaryBoxInner = styled.div`
  margin-bottom: 20px;
`

export const InfoBoxWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
`
export const InfoWrapper = styled.div`
  padding-top: 25px;
  text-align: center;
`
export const ExampleWrapper = styled.div`
  width: 100%;
  max-width: 320px; 
  margin: 0 auto;
  background: rgba(26,26,26,1);
  background: linear-gradient(356deg, rgba(50,50,50,1) 0%, rgba(58,58,58,1) 50%, rgba(50,50,50,1) 94%);
  min-height: 45px;
  text-align: center;
  
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #3e3e3e;

  box-shadow: #8d8d8d;
  -webkit-box-shadow: -5px -5px 12px 4px rgba(141,141,141,0.14), 8px 8px 20px 6px rgba(0,0,0,0.5), inset 0px 0px 8px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -5px -5px 12px 4px rgba(141,141,141,0.14), 8px 8px 20px 6px rgba(0,0,0,0.5), inset 0px 0px 8px 3px rgba(0, 0, 0, 0.5);
  box-shadow: -5px -5px 12px 4px rgba(141,141,141,0.14), 8px 8px 20px 6px rgba(0,0,0,0.5), inset 0px 0px 8px 3px rgba(0, 0, 0, 0.5);
`

export const ExampleInner = styled.p`
  padding:15px; 
  margin: 12px;

  font-size: 12px;

  border-radius: 5px;

  background: rgba(15,15,15,1);
  background: linear-gradient(356deg, rgba(18,18,18,1) 0%, rgba(35,35,35,1) 50%, rgba(40,40,40,1) 94%);
  box-shadow: #8d8d8d;
  -webkit-box-shadow: inset 0px 13px 18px 6px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: inset 0px 13px 18px 6px rgba(0, 0, 0, 0.6);
  box-shadow: inset 0px 13px 18px 6px rgba(0, 0, 0, 0.6);
`

export const PageLink = styled(Link)`
  text-shadow: -3px -3px 5px rgba(141,141,141,0.4), 4px 4px 4px rgba(0,0,0,1);
  margin-bottom: 30px;
  display: block;
  font-size: 14px;
`