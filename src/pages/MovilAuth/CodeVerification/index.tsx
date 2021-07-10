import React from "react";
import ReactCodeInput from "react-verification-code-input";
import iCodeVerification from "./types";
import { StyledInput } from "./styles";

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
