import React, { useState } from 'react';
import styled from "styled-components";
import ButtonBack from '../components/buttons/ButtonBack';
import Header from '../components/header/Header';
import PhoneNumber from '../components/movilAuth/PhoneNumber';
import RequestNumber from '../components/movilAuth/RequestNumber';
import ValidateNumber from '../components/movilAuth/ValidateNumber';
import PhoneValidator from '../utils/PhoneValidator';

const StyledContainer = styled.div`
  min-height:100vh;
  width:100%;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const StyledMain = styled.main`
  align-self: flex-end;
  display: grid;
  justify-content: center;
  padding-bottom: 40vh;
  &>*{
    margin-bottom:1.5rem;
  }
`;

const MovilAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [validating, setValidating] = useState<boolean>(false);

  const closeValidation = () => setValidating(false);

  const openValidation = (formPhoneNumber: string) => {
    if (PhoneValidator(formPhoneNumber)) {
      setPhoneNumber(formPhoneNumber);
      setValidating(true);
    }
  }

  return (
    <StyledContainer>
      <Header>
        <ButtonBack />
      </Header>
      <StyledMain>
        {validating ?
          <ValidateNumber phoneNumber={phoneNumber ?? ''} goBack={closeValidation} handleError={closeValidation} handleValidNumber={console.log} /> :
          <RequestNumber handleSubmit={openValidation} phoneNumber={phoneNumber ?? ''} />
        }
      </StyledMain>
    </StyledContainer>
  );
};

export default MovilAuth;