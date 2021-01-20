import React, { useState } from "react";
import styled from "styled-components";
import Form from "../Form";
import CodeVerification from "./CodeVerification";

interface Props {
    phoneNumber: string;
    goBack: () => void;
    buttonId?: string;
    handleSubmit: (code: string) => void;
}

const StyledForm = styled(Form)`
    button {
        margin: 1rem 0.25rem;
    }
`;

const StyledButtonContinue = styled.button`
    width: 85%;
`;

const ValidateNumber: React.FC<Props> = ({
    phoneNumber,
    goBack,
    buttonId,
    handleSubmit
}: Props): JSX.Element => {
    const [code, setCode] = useState<string>("");

    const submit = () => handleSubmit(code);

    return (
        <StyledForm handleSubmit={submit} isContentCentered>
            <h3>Mi codigo es:</h3>
            <button type="button" onClick={goBack}>
                {phoneNumber}
            </button>
            <button>Volver a mandar</button>
            <CodeVerification handleChange={setCode} />
            <StyledButtonContinue type="submit" id={buttonId}>
                Identificarme
            </StyledButtonContinue>
        </StyledForm>
    );
};

export default ValidateNumber;
