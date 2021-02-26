import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import React from "react";
import iPhoneNumber from "./types";
import { colors, fonts, fontSizes } from "../../../common/styles";

const PhoneNumber: React.FC<iPhoneNumber> = ({ handleChange, value }: iPhoneNumber) => {
    const change = (value: string) => handleChange?.(value);
    return (
        <div>
            <PhoneInput
                buttonStyle={{ paddingLeft: "53px" }}
                country={"us"}
                enableLongNumbers={true}
                inputStyle={{
                    backgroundColor: `${colors.lightGray}`,
                    color: `${colors.gray}`,
                    fontSize: `${fontSizes.font12}`,
                    fontFamily: `${fonts.poppins}`,
                    border: "none",
                    paddingLeft: "92px",
                    width: "254px",
                    height: "42px"
                }}
                masks={{ ar: "... ...-...." }}
                onChange={change}
                preferredCountries={["ar"]}
                prefix="+"
                value={value}
            />
        </div>
    );
};

export default PhoneNumber;
