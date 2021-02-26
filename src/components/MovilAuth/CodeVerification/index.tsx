import React from "react";
import ReactCodeInput from "react-verification-code-input";
import iCodeVerification from "./types";
import "./styles.css";

const CodeVerification: React.FC<iCodeVerification> = ({
    handleComplete,
    handleChange
}: iCodeVerification): JSX.Element => {
    return (
        <ReactCodeInput className="estilos" onChange={handleChange} onComplete={handleComplete} />
    );
};

export default CodeVerification;
