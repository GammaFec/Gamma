import React, { useState } from 'react';
import styled from "styled-components";
import ButtonBack from '../components/buttons/ButtonBack';
import Header from '../components/header/Header';
import PhoneNumber from '../components/movilAuth/PhoneNumber';
import RequestNumber from '../components/movilAuth/RequestNumber';
import ValidateNumber from '../components/movilAuth/ValidateNumber';

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

  const emptyPhone = () => setPhoneNumber(null);

  return (
    <StyledContainer>
      <Header>
        <ButtonBack />
      </Header>
      <StyledMain>
        {phoneNumber ?
          <ValidateNumber phoneNumber={phoneNumber} handleError={emptyPhone} handleValidNumber={console.log} /> :
          <RequestNumber handleSubmit={setPhoneNumber} />
        }
      </StyledMain>
    </StyledContainer>
  );
};

export default MovilAuth;