import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../forms/Form';
import PhoneNumber from './PhoneNumber';

interface Props {
  handleSubmit?: Function;
}

const StyledButtonContinue = styled.button`
  width: 85%;
  margin: 1rem auto;
`;

const RequestNumber: React.FC<Props> = ({ handleSubmit }): JSX.Element => {

  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const submit = (event: React.FormEvent) => handleSubmit && handleSubmit(phoneNumber);

  return (
    <Form handleSubmit={submit}>
      <h3>Mi numero es:</h3>
      <PhoneNumber handleChange={setPhoneNumber} value={phoneNumber} />
      <StyledButtonContinue type="submit">Enviar codigo</StyledButtonContinue>
    </Form>
  );
};

export default RequestNumber;