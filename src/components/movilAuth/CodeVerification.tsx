import React from 'react';
import ReactCodeInput from 'react-verification-code-input';

interface Props {
  handleComplete?: (value: string) => void;
  handleChange?: (value: string) => void;
}

const CodeVerification: React.FC<Props> = ({ handleComplete, handleChange }): JSX.Element => {
  return <ReactCodeInput onComplete={handleComplete} onChange={handleChange} />;
};

export default CodeVerification;
