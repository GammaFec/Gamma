import React from "react";
import ReactCodeInput from "react-verification-code-input";
import iCodeVerification from "./types";
import "./styles/index.css";

const CodeVerification: React.FC<iCodeVerification> = ({
    handleComplete,
    handleChange
}: iCodeVerification): JSX.Element => {
    return (
        <ReactCodeInput
            className="input-container"
            onChange={handleChange}
            onComplete={handleComplete}
        />
    );
};

export default CodeVerification;
