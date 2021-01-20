import React, { useEffect, useState } from "react";
import firebase from "firebase";

import ButtonBack from "../../components/Buttons/ButtonBack";
import Header from "../../components/Header/Header";
import RequestNumber from "../../components/MovilAuth/RequestNumber";
import ValidateNumber from "../../components/MovilAuth/ValidateNumber";
import getRecaptcha from "../../services/firebase/auth/getRecaptcha";
import PhoneValidator from "../../utils/PhoneValidator";
import sendSMSCode from "../../services/firebase/auth/sendSMSCode";
import verifyCode from "../../services/firebase/auth/verifyCode";

import { StyledContainer, StyledMain } from "./styles";

export default function index() {
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
    const [validating, setValidating] = useState<boolean>(false);
    const [recaptcha, setRecaptcha] = useState<firebase.auth.RecaptchaVerifier | null>();
    const [
        verificationResult,
        setVerificationResult
    ] = useState<firebase.auth.ConfirmationResult | null>();
    const ID = "MovilAuth";

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
                        phoneNumber={phoneNumber ?? ""}
                        goBack={closeValidation}
                        handleSubmit={validateNumberFirebase}
                    />
                ) : (
                    <RequestNumber
                        handleSubmit={openValidation}
                        phoneNumber={phoneNumber ?? ""}
                        buttonId={ID}
                    />
                )}
            </StyledMain>
        </StyledContainer>
    );
}
