import styled from "styled-components";

import { theme, fontSizes } from "../../../common/styles/index";

const StyledImg = styled.img`
    margin: 0 auto;
`;

const StyledDiv = styled.div<{ activeFilter: boolean }>`
    height: 63px;
    width: 63px;
    margin: 0 10px 6px 10px;
    background-color: ${({ activeFilter }): string =>
        activeFilter ? theme.colorPrimary : theme.colorSecondary};
    border-radius: 7px;
    align-items: center;
    display: flex;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-flow: column;

    p {
        letter-spacing: -0.44px;
        font-size: ${fontSizes.font12};
        margin: 0 auto;
        font-family: ${theme.fontPrimary};
    }
`;

export { StyledImg, StyledDiv, StyledWrapper };
