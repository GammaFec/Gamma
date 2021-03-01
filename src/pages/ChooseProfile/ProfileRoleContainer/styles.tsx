import styled from "styled-components";
import { fontSizes } from "../../../common/styles";
import Button from "../../../components/Button";

export const StyledProfileRoleContainer = styled.ul`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    list-style: none;
    justify-content: center;
    display: flex;
    padding: 0;
    gap: 24px;
    flex-wrap: wrap;
`;

export const StyledButton = styled(Button)`
    width: 100%;
    max-width: 600px;
    font-weight: lighter;
    font-size: ${fontSizes.font18};

    &.disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;
