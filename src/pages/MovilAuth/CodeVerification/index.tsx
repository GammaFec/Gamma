import React from "react";

import ReactCodeInput from "react-verification-code-input";

import { StyledInput } from "./styles";
import iCodeVerification from "./types";

const CodeVerification: React.FC<iCodeVerification> = ({
    handleComplete,
    handleChange
}: iCodeVerification): JSX.Element => {
    return (
        <StyledInput>
            <ReactCodeInput
                className="input-container"
                onChange={handleChange}
                onComplete={handleComplete}
            />
        </StyledInput>
    );
};

export default CodeVerification;
