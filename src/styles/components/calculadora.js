import styled from "styled-components"

export const CalcForm = styled.form`
  position: relative;
  max-width: 320px;
  margin: 0 auto;

  &:before{
    content: 'R$';
    display: inline-block;
    width: 50px;
    font-size: 14px;
    color: #1d1d1d;
    text-shadow: none;
    position: absolute;
    left: 0px;
    top: 0px;
    height: 70px;
    line-height: 65px;
  }

  &:after{
    content: 'milhões';
    display: inline-block;
    width: 50px;
    font-size: 14px;
    color: #1d1d1d;
    text-shadow: none;
    position: absolute;
    right: 0px;
    margin-right: 5%;
    font-weight: 900;
    top: 0px;
    height: 70px;
    line-height: 65px;
  }
`

export const NumbersWrapper = styled.div`
  margin: 0 auto 15px;
  max-width: 320px;
  width: 100%;
`
export const NumbersWrapperMod = styled.div`
  margin: 0 auto;
  max-width: 320px;
  width: 100%;
  font-size: 13px;
`
export const NumbersInner = styled.p`
  margin: 0;
  text-align: center;
  color: #c6c6c6;
  font-size: 14px;
`

export const CalcInput = styled.input`
  background-color: rgb(105, 105, 105);
  background: linear-gradient(356deg, rgba(50,50,50,1) 0%, rgba(58,58,58,1) 50%, rgba(50,50,50,1) 94%);
  box-shadow: #8d8d8d;
  -webkit-box-shadow: inset 0px 4px 8px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0px 4px 8px 3px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 4px 8px 3px rgba(0, 0, 0, 0.5);

  min-height: 45px;
  margin: 5px 0 0;
  border-radius: 50px;
  border: 1px solid #2f2f2f;
  
  text-align: left;
  line-height: 45px;
  color: #959595;
  font-size: 24px;
  font-weight: 300;
  padding: 0 25% 0 13%;
  width: 62%;
  outline: none;
`

export const CalcSubmit = styled.input`
  background-color: rgba(206,42,18,1);
  background: linear-gradient(90deg, rgba(227,84,10,1) 0%, rgba(237,75,19,1) 50%, rgba(206,42,18,1) 94%);
  -webkit-box-sizing: content-box;
	-moz-box-sizing: content-box;
	box-sizing: content-box;
	outline: none;
  min-height: 45px;
  width: 100%;
  margin: 20px 0 40px;
  border-radius: 50px;
  border: 2px solid #f95610;
  
  -webkit-box-shadow: -6px -6px 14px 14px rgba(141,141,141,0.2);
  -moz-box-shadow: -6px -6px 14px 14px rgba(141,141,141,0.2);
  box-shadow: -5px -5px 12px 4px rgba(141,141,141,0.2), 8px 8px 30px 6px rgba(0,0,0,0.7), inset 7px 7px 18px 11px rgba(186,32,15,0.5);

  text-shadow: 3px 4px 4px rgba(207, 0, 0, 0.7), -3px -3px 5px rgba(255, 246, 0, 0.3);
  text-align: center;
  line-height: 45px;
  color: #fff;
  font-size: 24px;
  font-weight: 900;

  cursor: pointer;

  &:hover{
    background-color: rgb(227,84,10);
    background: linear-gradient(0deg, rgba(227,84,10,1) 0%, rgba(241,83,28,1) 25%, rgba(206,42,18,1) 100%);
  }
`

export const Mortes = styled.span`
  color: #d61d1d;
  font-size: 12px;
  font-weight: 900;
  line-height: 40px;
  margin: 0;
`

export const LifesPerMin = styled.span`
  color: #ff6000;
  font-size: 38px;
  font-weight: 600;
`

export const MultipleNumbersWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;

  & span{
    margin-bottom: 0;
  }
`

export const MultipleNumbersInner = styled.p`
  font-size: 35px;
  letter-spacing: 0.2px;
  display: block;
  text-align: center;
  margin-top: 25px;
  line-height: 32px;
  font-weight: 900;
  width: 100px;
  overflow: hidden;

  & span{
    display:block;
    font-size: 18px;
    color: #959595;
    font-weight: 300;
  }
`