import React, { useEffect, useState } from "react";

import firebase from "firebase";

import Header from "../../components/Header";
import { sendSMSCode, verifyCode, getRecaptcha } from "../../services/firebase/phone-auth";
import PhoneValidator from "../../utils/PhoneValidator";
import RequestNumber from "./RequestNumber";
import { StyledContainer, StyledMain } from "./styles";
import ValidateNumber from "./ValidateNumber";

const MovilAuth = (): JSX.Element => {
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
    const [validating, setValidating] = useState<boolean>(false);
    const [recaptcha, setRecaptcha] = useState<firebase.auth.RecaptchaVerifier | null>();
    const [veriResult, setVeriResult] = useState<firebase.auth.ConfirmationResult | null>();
    const ID = "MovilAuth";

    useEffect(() => {
        setRecaptcha(getRecaptcha(ID));
    }, []);

    const closeValidation = (): void => setValidating(false);

    const openValidation = (formPhoneNumber: string): void => {
        if (PhoneValidator(formPhoneNumber) && recaptcha) {
            setPhoneNumber(formPhoneNumber);
            sendSMSCode(formPhoneNumber, recaptcha).then(
                (result: firebase.auth.ConfirmationResult) => {
                    setVeriResult(result);
                    setValidating(true);
                }
            );
        }
    };

    const validateNumberFirebase = async (code: string): Promise<boolean> => {
        if (veriResult) {
            const result = await verifyCode(code, veriResult);
            if (result) alert("Logueadisimo!");
            return result;
        }

        return false;
    };

    return (
        <StyledContainer>
            <Header>{/* <ButtonBack /> */}</Header>
            <StyledMain>
                {validating ? (
                    <ValidateNumber
                        goBack={closeValidation}
                        handleSubmit={validateNumberFirebase}
                        phoneNumber={phoneNumber ?? ""}
                    />
                ) : (
                    <RequestNumber
                        buttonId={ID}
                        handleSubmit={openValidation}
                        phoneNumber={phoneNumber ?? ""}
                    />
                )}
            </StyledMain>
        </StyledContainer>
    );
};

export default MovilAuth;
