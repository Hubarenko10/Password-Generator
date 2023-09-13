import styled from "styled-components";
import { FaRegCopy } from 'react-icons/fa';

export const PassBox = styled.div`
width: 540px;
height: 80px;
background: #24232C;
display: flex;
border: none;
margin-right:auto;
margin-left: auto;
margin-top: 30px;
`
export const PassInput = styled.input`
  border: none;
  background: #24232C;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 32px;
  width: 450px;
  height: 42px;
  font-size: 32px;
  color: #E6E5EA;
  &:focus{
    border:none
  }
`;

export const CopyBtn = styled(FaRegCopy)`
width: 21px;
height: 24px;
color: #A4FFAF;
margin-top: auto;
margin-bottom: auto;
cursor: pointer;
&:hover{
  fill:#FFF
}
`