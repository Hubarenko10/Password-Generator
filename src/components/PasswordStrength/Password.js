import {
  Difficult,
  PasswordBox,
  PasswordText,
  StrengthBox,
  StrengthList,
  StrengthText,
} from './PasswordStyled';

export const PasswordStrength = ({ length }) => {
  return (
    <PasswordBox>
      <PasswordText>STRENGTH</PasswordText>
      <StrengthBox>
        <StrengthText>
          {length <= 5 ? (
            <span>Too Weak!</span>
          ) : length <= 8 ? (
            <span>Weak</span>
          ) : length <= 10 ? (
            <span>Middle</span>
          ) : (
            <span>Strong</span>
          )}
        </StrengthText>
        <StrengthList>
          <Difficult index={0} length={length}></Difficult>
          <Difficult index={1} length={length}></Difficult>
          <Difficult index={2} length={length}></Difficult>
          <Difficult index={3} length={length}></Difficult>
        </StrengthList>
      </StrengthBox>
    </PasswordBox>
  );
};
