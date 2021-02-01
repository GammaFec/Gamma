import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import React from "react";
import iPhoneNumber from "./types";

const PhoneNumber: React.FC<iPhoneNumber> = ({ handleChange, value }: iPhoneNumber) => {
    const change = (value: string) => handleChange?.(value);

    return (
        <div>
            <PhoneInput
                country={"us"}
                value={value}
                onChange={change}
                preferredCountries={["ar"]}
                prefix="+"
                enableLongNumbers={true}
                masks={{ ar: "... ...-...." }}
            />
        </div>
    );
};

export default PhoneNumber;
