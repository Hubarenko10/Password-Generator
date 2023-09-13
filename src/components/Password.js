import React, { useState } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const charset = `${includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''}${includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : ''}${includeNumbers ? '0123456789' : ''}${includeSymbols ? '!@#$%^&*()_+' : ''}`;
    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  const handlePasswordLengthChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPasswordLength(value);
  };

  const handleIncludeUppercaseChange = () => {
    setIncludeUppercase(!includeUppercase);
  };

  const handleIncludeLowercaseChange = () => {
    setIncludeLowercase(!includeLowercase);
  };

  const handleIncludeNumbersChange = () => {
    setIncludeNumbers(!includeNumbers);
  };

  const handleIncludeSymbolsChange = () => {
    setIncludeSymbols(!includeSymbols);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <label>Password Length:</label>
        <input
          type="number"
          value={passwordLength}
          onChange={handlePasswordLengthChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={handleIncludeUppercaseChange}
          />
          Include Uppercase Letters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={handleIncludeLowercaseChange}
          />
          Include Lowercase Letters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={handleIncludeNumbersChange}
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={handleIncludeSymbolsChange}
          />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <strong>Password:</strong> {password}
      </div>
    </div>
  );
}

export default PasswordGenerator;