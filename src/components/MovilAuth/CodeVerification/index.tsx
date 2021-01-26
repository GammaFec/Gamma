import React from "react";
import ReactCodeInput from "react-verification-code-input";
import iCodeVerification from "./types";

const CodeVerification: React.FC<iCodeVerification> = ({
    handleComplete,
    handleChange
}: iCodeVerification): JSX.Element => {
    return <ReactCodeInput onComplete={handleComplete} onChange={handleChange} />;
};

export default CodeVerification;
