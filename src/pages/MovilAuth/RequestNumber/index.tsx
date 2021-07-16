import React, { useState } from "react";

import { PRIMARY } from "../../../common/styles/constants";
import { HANDSHONE_SVG } from "../../../common/styles/svgs";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import PhoneNumber from "../PhoneNumber";
import { StyledContainer, StyledSpan, styles } from "./styles";
import iRequestNumber from "./types";

const RequestNumber: React.FC<iRequestNumber> = ({
    handleSubmit,
    phoneNumber,
    buttonId
}: iRequestNumber): JSX.Element => {
    const [statePhoneNumber, setStatePhoneNumber] = useState<string>(phoneNumber);

    const submit = (): void => handleSubmit?.(statePhoneNumber);

    return (
        <StyledContainer>
            <h3>
                <span>Ingresa tu</span>
                <span>número de telefono</span>
            </h3>
            <p>
                Pensando en la integridad de las animales <br /> necesitaras un código de
                verificación de
                <StyledSpan> 4 digitos</StyledSpan>
            </p>
            <Form handleSubmit={submit} isContentCentered>
                <PhoneNumber handleChange={setStatePhoneNumber} value={statePhoneNumber} />
                <Button id={buttonId} styles={styles} type="submit" variant={PRIMARY}>
                    Continuar
                </Button>
            </Form>
            <HANDSHONE_SVG />
        </StyledContainer>
    );
};

export default RequestNumber;
