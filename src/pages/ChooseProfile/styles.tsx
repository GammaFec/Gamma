import styled from "styled-components";
import { fontSizes, breakpoints } from "../../common/styles/variables";
import { ReactComponent as BlueDog } from "../../assets/img/blue_dog.svg";

export const StyledBlueDog = styled(BlueDog)`
    position: fixed;
    bottom: 0;
    right: 20px;
`;

export const StyledMain = styled.main`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
`;

export const StyledContainer = styled.div`
    max-width: 90%;
    text-align: center;
`;

export const StyledTitle = styled.h1`
    font-size: ${fontSizes.font21};
    line-height: 31.5px;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.font30};
    }
`;

export const StyledText = styled.p`
    font-size: ${fontSizes.font12};
    line-height: 18px;
    margin-bottom: 45px;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.font16};
    }
`;
