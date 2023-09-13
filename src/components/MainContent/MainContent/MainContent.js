// import PasswordGenerator from "components/Password";
import {
  Arrow,
  BtnText,
  GenerateBtn,
  Item,
  List,
  MainBox,
  Number,
  Text,
  TextBox,
} from './MainContentStyle';
import { Checkbox } from '@mui/material';
import { PasswordStrength } from '../../PasswordStrength/Password';
import { Slider } from '@mui/material';
import { useState } from 'react';
import { Password } from 'components/PasswordArea/PasswordArea';

export const MainContent = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(3);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowercase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handlegeneratePassword = () => {
    const charset =
      'abcdefghijklmnopqrstuvwxyz' +
      (includeUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
      (includeNumbers ? '0123456789' : '') +
      (includeSymbols ? '!@#$%^&*()_+[]{}|;:,.<>?~' : '');

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };
  const handleChange = e => {
    const newValue = parseInt(e.target.value);
    setLength(newValue);
  };

  const handleCheckBoxChange = e => {
    const name = e.target.name;
    const value = e.target.checked;

    switch (name) {
      case 'uppercase':
        setIncludeUpperCase(value);
        break;
      case 'lowercase':
        setIncludeLowerCase(value);
        break;
      case 'numbers':
        setIncludeNumbers(value);
        break;
      case 'symbols':
        setIncludeSymbols(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
    <Password password={password}/>
    <MainBox>
      <div style={{ marginLeft: '32px', marginRight: '32px' }}>
        <TextBox>
          <Text>Character Length</Text>
          <Number>{length}</Number>
        </TextBox>
        <Slider
          value={length}
          onChange={handleChange}
          min={3}
          max={20}
          sx={{
            color: '#A4FFAF',
            '& .MuiSlider-thumb': {
              width: '28px',
              height: '28px',
              border: 'none',
              color: '#979797',
              '&:hover': {
                color: '#18171F',
                border:'2px solid #A4FFAF'
              },
            },
            '& .MuiSlider-rail': {
              color: '#18171F',
              height: '8px',
              borderRadius: '1px',
            },
            '& .MuiSlider-track': {
              borderRadius: '1px',
            },
          }}
        />
      </div>

      <List>
        <Item>
          <Checkbox
            name="uppercase"
            checked={includeUpperCase}
            onChange={handleCheckBoxChange}
            sx={{
              width: '20px',
              height: '20px',
              color: '#fff',
              '&.Mui-checked': {
                color: '#A4FFAF',
              },
            }}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Text>Include Uppercase Letters</Text>
        </Item>
        <Item>
          <Checkbox
            name="lowercase"
            checked={includeLowercase}
            onChange={handleCheckBoxChange}
            sx={{
              width: '20px',
              height: '20px',
              color: '#fff',
              '&.Mui-checked': {
                color: '#A4FFAF',
              },
            }}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Text>Include Lowercase Letters</Text>
        </Item>
        <Item>
          <Checkbox
            name="numbers"
            checked={includeNumbers}
            onChange={handleCheckBoxChange}
            sx={{
              width: '20px',
              height: '20px',
              color: '#fff',
              '&.Mui-checked': {
                color: '#A4FFAF',
              },
            }}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Text>Include Numbers</Text>
        </Item>
        <Item>
          <Checkbox
            name="symbols"
            checked={includeSymbols}
            onChange={handleCheckBoxChange}
            sx={{
              width: '20px',
              height: '20px',
              color: '#fff',
              '&.Mui-checked': {
                color: '#A4FFAF',
              },
            }}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Text>Include Symbols</Text>
        </Item>
      </List>

      <PasswordStrength length={length} />
      <GenerateBtn onClick={handlegeneratePassword}>
        <BtnText>GENERATE</BtnText>
        <Arrow />
      </GenerateBtn>
    </MainBox>
    </>
  );
};
