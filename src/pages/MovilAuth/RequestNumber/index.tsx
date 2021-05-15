import React, { useState } from "react";
import Form from "../../../components/Form";
import PhoneNumber from "./PhoneNumber";
import { StyledButtonContinue } from "./styles";
import iRequestNumber from "./types";

const RequestNumber: React.FC<iRequestNumber> = ({
    handleSubmit,
    phoneNumber,
    buttonId
}: iRequestNumber): JSX.Element => {
    const [statePhoneNumber, setStatePhoneNumber] = useState<string>(phoneNumber);

    const submit = (): void => handleSubmit?.(statePhoneNumber);

    return (
        <Form handleSubmit={submit} isContentCentered>
            <h3>Mi numero es:</h3>
            <PhoneNumber handleChange={setStatePhoneNumber} value={statePhoneNumber} />
            <StyledButtonContinue id={buttonId} type="submit">
                Enviar codigo
            </StyledButtonContinue>
        </Form>
    );
};

export default RequestNumber;
