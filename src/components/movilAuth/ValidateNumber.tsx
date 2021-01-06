import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../forms/Form';
import CodeVerification from './CodeVerification';

interface Props {
  phoneNumber: string;
  handleError: () => void;
  handleValidNumber: Function;
  goBack: () => void;
}

const StyledForm = styled(Form)`
  button{
    margin: 1rem .25rem;
  }
`;

const StyledButtonContinue = styled.button`
  width: 85%;
`;

const ValidateNumber: React.FC<Props> = ({ phoneNumber, goBack }): JSX.Element => {
  const [code, setCode] = useState<string>("");

  const submit = () => {
    console.log(code);
  }

  return (
    <StyledForm handleSubmit={submit} isContentCentered>
      <h3>Mi codigo es:</h3>
      <button type="button" onClick={goBack}>{phoneNumber}</button><button>Volver a mandar</button>
      <CodeVerification handleChange={setCode} />
      <StyledButtonContinue type="submit">Identificarme</StyledButtonContinue>
    </StyledForm>
  );
};

export default ValidateNumber;