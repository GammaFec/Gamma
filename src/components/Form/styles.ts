import styled, { css } from "styled-components";
import { FormProps } from "./types";

export const StyledForm = styled.form`
    ${({ isContentCentered }: FormProps) =>
        isContentCentered &&
        css`
            text-align: center;
        `}
`;
