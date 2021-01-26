import styled, { css } from "styled-components";
import iForm from "./types";

export const StyledForm = styled.form`
    ${({ isContentCentered }: iForm) =>
        isContentCentered &&
        css`
            text-align: center;
        `}
`;
