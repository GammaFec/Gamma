import React from "react";
import { StyledForm } from "./styles";
import iForm from "./types";

const Form: React.FC<iForm> = ({
    handleSubmit,
    children,
    className,
    isContentCentered
}: iForm): JSX.Element => {
    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        handleSubmit && handleSubmit(event);
    };

    return (
        <StyledForm onSubmit={submit} className={className} isContentCentered>
            {children}
        </StyledForm>
    );
};

export default Form;
