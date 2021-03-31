import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import React from "react";
import iPhoneNumber from "./types";
import { colors, fonts, fontSizes } from "../../../common/styles";

const PhoneNumber: React.FC<iPhoneNumber> = ({ handleChange, value }: iPhoneNumber) => {
    const change = (value: string): void => handleChange?.(value);

    return (
        <div>
            <PhoneInput
                buttonStyle={{ paddingLeft: "40px" }}
                country={"us"}
                enableLongNumbers={true}
                inputStyle={{
                    backgroundColor: `${colors.lightGray}`,
                    color: `${colors.gray}`,
                    fontSize: `${fontSizes.font14}`,
                    fontFamily: `${fonts.poppins}`,
                    fontWeight: 600,
                    border: "none",
                    paddingLeft: "112px",
                    width: "321px",
                    height: "53px"
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
