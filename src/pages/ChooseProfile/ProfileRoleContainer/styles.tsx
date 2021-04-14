import styled from "styled-components";
import { fontSizes } from "../../../common/styles/variables";
import Button from "../../../components/Button";

export const StyledProfileRoleContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    list-style: none;
    margin-bottom: 30px;
    margin-top: 1rem;
    padding: 0;
    width: 100%;
`;

export const StyledButton = styled(Button)`
    font-size: ${fontSizes.font18};
    font-weight: lighter;
    margin: auto;
    max-width: 600px;
    width: 100%;
`;
