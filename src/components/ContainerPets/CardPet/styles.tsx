import styled from "styled-components";
import { fontSizes, theme } from "../../../common/styles";

const StyledCard = styled.figure`
    display: flex;
    margin: auto;
    margin-bottom: 21px;
    align-items: center;
    width: 360px;
    font-family: ${theme.fontPrimary};
    font-size: ${fontSizes.font12};
    cursor: pointer;
`;

const StyledImage = styled.img`
    display: block;
    height: 118px;
    width: 117px;
`;

const StyledPetInfo = styled.div`
    width: 126px;
    height: 76px;
    margin-left: 38px;

    & h2 {
        font-size: ${fontSizes.font12};
    }

    & figcaption :first-child {
        font-weight: 600;
    }

    & figcaption {
        transform: translate(0, -41px);

        & span {
            display: block;
        }
    }

    & > svg {
        transform: translate(125px, -40px);
    }
`;

export { StyledPetInfo, StyledImage, StyledCard };
