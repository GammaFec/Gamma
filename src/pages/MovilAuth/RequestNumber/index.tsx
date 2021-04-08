import React, { useState } from "react";
import Form from "../../../components/Form";

import PhoneNumber from "../PhoneNumber";
import { StyledButtonContinue, StyledContainer, StyledSpan } from "./styles";
import iRequestNumber from "./types";

import "./styles/index.css";
import { PRIMARY } from "../../../common/constants";

const RequestNumber: React.FC<iRequestNumber> = ({
    handleSubmit,
    phoneNumber,
    buttonId
}: iRequestNumber): JSX.Element => {
    const [statePhoneNumber, setStatePhoneNumber] = useState<string>(phoneNumber);

    const submit = () => handleSubmit?.(statePhoneNumber);

    return (
        <StyledContainer>
            <h3>
                Ingresa tu <br /> número de telefono
            </h3>
            <p>
                Pensando en la integridad de las animales <br /> necesitaras un código de
                verificación de
                <StyledSpan> 4 digitos</StyledSpan>
            </p>
            <Form handleSubmit={submit} isContentCentered>
                <PhoneNumber handleChange={setStatePhoneNumber} value={statePhoneNumber} />
                <StyledButtonContinue id={buttonId} type="submit" variant={PRIMARY}>
                    Continuar
                </StyledButtonContinue>
            </Form>
        </StyledContainer>
    );
};

export default RequestNumber;
