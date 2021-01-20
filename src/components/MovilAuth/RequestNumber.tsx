import React, { useState } from "react";
import styled from "styled-components";
import Form from "../Forms/Form";
import PhoneNumber from "./PhoneNumber";

interface Props {
    handleSubmit?: (phoneNumber: string) => void;
    phoneNumber: string;
    buttonId?: string;
}

const StyledButtonContinue = styled.button`
    width: 85%;
    margin: 1rem auto;
`;

const RequestNumber: React.FC<Props> = ({
    handleSubmit,
    phoneNumber,
    buttonId
}: Props): JSX.Element => {
    const [statePhoneNumber, setStatePhoneNumber] = useState<string>(phoneNumber);

    const submit = (event: React.FormEvent) => handleSubmit && handleSubmit(statePhoneNumber);

    return (
        <Form handleSubmit={submit} isContentCentered>
            <h3>Mi numero es:</h3>
            <PhoneNumber handleChange={setStatePhoneNumber} value={statePhoneNumber} />
            <StyledButtonContinue type="submit" id={buttonId}>
                Enviar codigo
            </StyledButtonContinue>
        </Form>
    );
};

export default RequestNumber;
