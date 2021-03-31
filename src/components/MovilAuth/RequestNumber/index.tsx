/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { PRIMARY } from "../../../common/constants";
import Form from "../../Form";
import PhoneNumber from "../PhoneNumber";
import { StyledButtonContinue, StyledContainer, StyledSpan } from "./styles";
import iRequestNumber from "./types";

const RequestNumber: React.FC<iRequestNumber> = ({
    handleSubmit,
    phoneNumber
}: iRequestNumber): JSX.Element => {
    const [statePhoneNumber, setStatePhoneNumber] = useState<string>((phoneNumber = "234234"));

    const submit = (): void => handleSubmit?.(statePhoneNumber);

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
                <StyledButtonContinue id="buttonId" type="submit" variant={PRIMARY}>
                    Continuar
                </StyledButtonContinue>
            </Form>
        </StyledContainer>
    );
};

export default RequestNumber;
