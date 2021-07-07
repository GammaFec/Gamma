import styled from "styled-components";
import { fontSizes, colors } from "../../../../common/styles/variables";

export const StyledProfileRole = styled.div<{ color: string; image: string }>`
    display: flex;
    width: 148px;
    height: 153px;
    background-color: ${({ color }): string =>
        color === "primary" ? colors.orange : colors.green};
    background-image: url(${({ image }): string => `${image}`});
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: right;
    border-radius: 7px;
    box-shadow: 1px 5px 20px -4px rgba(0, 0, 0, 0.67);
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    transition: transform 0.1s linear;
    cursor: pointer;
    font-weight: lighter;

    * {
        margin: 0;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        color: ${colors.white};
        font-size: ${fontSizes.font12};
        font-weight: bolder;
    }

    &.selected {
        transform: scale(1.05);
    }
    &:not(.selected) {
        opacity: 0.9;
    }
`;
