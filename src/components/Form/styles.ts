import styled from "styled-components";
import iForm from "./types";

export const StyledForm = styled.form<iForm>`
    text-align: ${({ isContentCentered }) => (isContentCentered ? "center" : "left")};
`;
