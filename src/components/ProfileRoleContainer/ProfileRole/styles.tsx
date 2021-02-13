import styled from "styled-components";
import { fontSizes, colors } from "../../../common/styles";

export const StyledProfileRole = styled.div`
    display: flex;
    width: 150px;
    height: 170px;
    background-color: ${({ color }) => (color === "primary" ? colors.orange : colors.green)};
    border-radius: 1rem;
    box-shadow: 1px 5px 20px -4px rgba(0, 0, 0, 0.67);
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    transition: transform 0.1s linear;
    cursor: pointer;
    font-weight: lighter;

    &:hover {
        transform: rotate(5deg);
    }

    * {
        margin: 0;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        color: ${colors.white};
        font-size: ${fontSizes.font18};
        font-weight: bolder;
    }

    &.selected {
        transform: scale(0.9);
    }
`;
