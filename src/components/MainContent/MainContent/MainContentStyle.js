import styled from "@emotion/styled"
import { AiOutlineArrowRight } from 'react-icons/ai';

// Main Box Styles

export const MainBox = styled.div`
width: 540px;
height: 528px;
background: #24232C;
margin-top: 24px;
margin-right: auto;
margin-left: auto;
`
//  Slider`s styles

export const TextBox = styled.div`
padding-top: 24px;
margin-bottom: 16px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const Text = styled.p`
color: #E6E5EA;
font-size:18px;
margin-top: 0;
margin-bottom: 0;

`
export const Number = styled.p`
color: #A4FFAF;
font-size:32px;
margin-top: 0;
margin-bottom: 0;
`

// Filter`s styles

export const List = styled.ul`
list-style-type: none;
margin-top: 32px;
padding-left: 25px;

`

export const Item = styled.li`
display: flex;
align-items:center;
gap:24px;
&:not(:last-child) {
    margin-bottom: 15px;
  }
`

export const FilterText = styled.p`
color: #E6E5EA;
margin-left: 24px;
font-size: 18px;
font-weight:bold;
`

//

export const GenerateBtn = styled.button`
  border: 2px solid #A4FFAF;
  width: 476px;
  height: 65px;
  cursor: pointer;
  margin: 32px 32px 0 32px;
  background-color: #A4FFAF;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ;
  &:hover {
    background-color: transparent;
    
    & * {
      color: #A4FFAF;
      fill: #A4FFAF;
    }
    &:not(:hover) {
    background-color: #A4FFAF;
    color: #fff;

    & * {
      color: #24232C;
      fill: #24232C;
    }
  }
  }
`;

export const BtnText = styled.p`
  color: #24232C;
  font-size: 18px;
  font-weight: bold;
`;

export const Arrow = styled(AiOutlineArrowRight)`
  fill: #24232C;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  width: 12px;
  height: 12px;
`;