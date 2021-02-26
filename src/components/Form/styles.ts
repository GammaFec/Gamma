import styled from "styled-components";
import { fonts } from "../../common/styles";
import iForm from "./types";

export const StyledForm = styled.form<iForm>`
    font-family: ${fonts.poppins};
    text-align: ${({ isContentCentered }) => (isContentCentered ? "center" : "left")};
    margin-top: 57px;
`;
