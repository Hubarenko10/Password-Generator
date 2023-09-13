import styled from "@emotion/styled"

export const PasswordBox = styled.div`
width: 476px;
height: 72px;
margin-top: 32px;
margin-left: auto;
margin-right:auto;
background-color: #18171F;
display: flex;
align-items:center;
justify-content: space-between
`

export const PasswordText = styled.p`
padding-top:25px;
padding-bottom:25px;
padding-left:32px;
color:#817D92;
font-weight:bold;

`
export const StrengthBox = styled.div`
display: flex;
padding-right:21px;
align-items:center;
`
export const StrengthText = styled.p`
  margin-right: 16px;
  font-size: 24px;
  color: #fff;
`;
export const StrengthList = styled.ul`
display: flex;
gap:8px;
&:not(:last-child){
  background-color:green 
}
`

export const Difficult = styled.div`
width: 10px;
height: 28px;
border: ${({ index, length }) => {
    if (length <= 5) {
      return index < 1 ? '2px solid #F64A4A' : '2px solid white';
    }
    if (length <= 8) {
      return index < 2 ? '2px solid #FB7C58' : '2px solid white';
    }
    if (length <= 10) {
      return index < 3 ? '2px solid #F8CD65' : '2px solid white';
    }
    return '2px solid #A4FFAF';
  }};
background-color: ${({ index, length }) => {
if(length <= 5){
  return index < 1 ? "#F64A4A" : "transparent"
}
if(length <= 8){
  return index < 2 ? "#FB7C58" : "transparent"
}
if(length <=10){
  return index < 3 ? "#F8CD65" : "transparent"
}
return "#A4FFAF"
}
  };
`



