import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
    handleSubmit?: (event: React.FormEvent) => void;
    children: ReactNode;
    className?: string;
    isContentCentered?: boolean;
}

const StyledForm = styled.form`
    ${({ isContentCentered }: Props) =>
        isContentCentered &&
        css`
            text-align: center;
        `}
`;

const Form: React.FC<Props> = ({
    handleSubmit,
    children,
    className,
    isContentCentered
}): JSX.Element => {
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
