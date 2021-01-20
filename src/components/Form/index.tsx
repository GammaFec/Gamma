import React from "react";
import { StyledForm } from "./styles";
import { FormProps } from "./types";

const Form: React.FC<FormProps> = ({
    handleSubmit,
    children,
    className,
    isContentCentered
}: FormProps): JSX.Element => {
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
