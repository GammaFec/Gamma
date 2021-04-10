import React from "react";
import PhoneInput from "react-phone-input-2";
import iPhoneNumber from "./types";
import "react-phone-input-2/lib/material.css";
import "./styles/index.css";
import { StyledLine, StyledContainer, StyledDropDown, StyledInput } from "./styles";

import { ReactComponent as Mobile } from "../../../assets/img/bx_bx-mobile-alt.svg";

const PhoneNumber: React.FC<iPhoneNumber> = ({ handleChange, value }: iPhoneNumber) => {
    const change = (value: string): void => handleChange?.(value);
    return (
        <StyledContainer>
            <Mobile />
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
