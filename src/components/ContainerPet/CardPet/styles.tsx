import styled from "styled-components";
import { fonts, fontSizes } from "../../../common/styles";

const StyledCard = styled.figure`
    display: flex;
    margin: auto;
    margin-bottom: 21px;
    align-items: center;
    width: 360px;
    font-family: ${fonts.poppins};
    font-size: ${fontSizes.font12};
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
    transform: translateY(-6px);

    & h2 {
        font-size: ${fontSizes.font12};
        transform: translate(-1px, -3px);
    }

    & figcaption :first-child {
        font-weight: 600;
    }

    & figcaption {
        transform: translate(0, -41px);

        & span {
            display: block;
        }

        & svg {
            transform: translate(-3px, 4px);
        }
    }

    & svg {
        transform: translate(125px, -40px);
    }
`;

export { StyledPetInfo, StyledImage, StyledCard };
