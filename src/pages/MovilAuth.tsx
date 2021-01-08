import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonBack from '../components/buttons/ButtonBack';
import Header from '../components/header/Header';
import PhoneNumber from '../components/movilAuth/PhoneNumber';
import RequestNumber from '../components/movilAuth/RequestNumber';
import ValidateNumber from '../components/movilAuth/ValidateNumber';
import getRecaptcha from '../services/firebase/auth/getRecaptcha';
import PhoneValidator from '../utils/PhoneValidator';
import firebase from 'firebase';
import sendSMSCode from '../services/firebase/auth/sendSMSCode';
import verifyCode from '../services/firebase/auth/verifyCode';

const StyledContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
`;

const StyledMain = styled.main`
    align-self: flex-end;
    display: grid;
    justify-content: center;
    padding-bottom: 40vh;
    & > * {
        margin-bottom: 1.5rem;
    }
`;

const MovilAuth = () => {
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
    const [validating, setValidating] = useState<boolean>(false);
    const [recaptcha, setRecaptcha] = useState<firebase.auth.RecaptchaVerifier | null>();
    const [
        verificationResult,
        setVerificationResult
    ] = useState<firebase.auth.ConfirmationResult | null>();
    const ID = 'MovilAuth';

    useEffect(() => {
        setRecaptcha(getRecaptcha(ID));
    }, []);

    const closeValidation = () => setValidating(false);

    const openValidation = (formPhoneNumber: string) => {
        if (PhoneValidator(formPhoneNumber) && recaptcha) {
            setPhoneNumber(formPhoneNumber);
            sendSMSCode(formPhoneNumber, recaptcha).then(
                (result: firebase.auth.ConfirmationResult) => {
                    setVerificationResult(result);
                    setValidating(true);
                }
            );
        }
    };

    const validateNumberFirebase = async (code: string): Promise<boolean> => {
        if (verificationResult) {
            const result = await verifyCode(code, verificationResult);
            return result;
        }

        return false;
    };

    return (
        <StyledContainer>
            <Header>
                <ButtonBack />
            </Header>
            <StyledMain>
                {validating ? (
                    <ValidateNumber
                        phoneNumber={phoneNumber ?? ''}
                        goBack={closeValidation}
                        handleSubmit={validateNumberFirebase}
                    />
                ) : (
                    <RequestNumber
                        handleSubmit={openValidation}
                        phoneNumber={phoneNumber ?? ''}
                        buttonId={ID}
                    />
                )}
            </StyledMain>
        </StyledContainer>
    );
};

export default MovilAuth;
