import styled from "styled-components";

import { colors, fonts, fontSizes } from "../../../common/styles/variables";

const StyledContainer = styled.div`
    position: relative;
    & svg {
        position: absolute;
        left: 50px;
        top: 14px;
        z-index: 10;
    }

    .react-tel-input .selected-flag {
        padding-left: 77px;
    }
`;

const StyledLine = styled.div`
    left: 112px;
    z-index: 10;
    top: 12px;
    width: 1px;
    height: 19px;
    background-color: ${colors.lighDarkGray};
    position: absolute;
`;

const StyledDropDown = { width: "255px", marginLeft: "42px", display: "none" };

const StyledInput = {
    backgroundColor: `${colors.lightGray}`,
    color: `${colors.gray}`,
    border: "none",
    fontSize: `${fontSizes.font12}`,
    fontFamily: `${fonts.poppins}`,
    width: "254px",
    paddingLeft: "90px",
    paddingTop: "17.5px",
    height: "42px"
};

export { StyledContainer, StyledLine, StyledDropDown, StyledInput };
