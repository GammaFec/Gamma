import React from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import { MOBILE_SVG } from "../../../common/styles/svgs";
import { StyledLine, StyledContainer, StyledDropDown, StyledInput } from "./styles";
import iPhoneNumber from "./types";

const PhoneNumber: React.FC<iPhoneNumber> = ({ handleChange, value }: iPhoneNumber) => {
    const change = (value: string): void => handleChange?.(value);
    return (
        <StyledContainer>
            <MOBILE_SVG />
            <StyledLine />
            <PhoneInput
                country={"us"}
                dropdownStyle={StyledDropDown}
                enableLongNumbers={true}
                inputStyle={StyledInput}
                masks={{ ar: "... ...-...." }}
                onChange={change}
                preferredCountries={["ar"]}
                prefix="+"
                value={value}
            />
        </StyledContainer>
    );
};

export default PhoneNumber;
