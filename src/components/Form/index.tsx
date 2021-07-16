import React from "react";

import { StyledForm } from "./styles";
import iForm from "./types";

const Form: React.FC<iForm> = ({ handleSubmit, children, className }: iForm): JSX.Element => {
    const submit = (event: React.FormEvent): void => {
        event.preventDefault();
        handleSubmit && handleSubmit(event);
    };

    return (
        <StyledForm className={className} onSubmit={submit}>
            {children}
        </StyledForm>
    );
};

export default Form;
