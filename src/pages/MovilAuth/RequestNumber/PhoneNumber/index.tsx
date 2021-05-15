import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import React from "react";
import iPhoneNumber from "./types";

const PhoneNumber: React.FC<iPhoneNumber> = ({ handleChange, value }: iPhoneNumber) => {
    const change = (value: string): void => handleChange?.(value);

    return (
        <div>
            <PhoneInput
                country={"us"}
                enableLongNumbers={true}
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
