import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

import React, { useState } from 'react';

interface Props {
    handleChange: (value: string) => void;
    value: string;
}

const PhoneNumber: React.FC<Props> = ({ handleChange, value }: Props) => {
    const change = (value: string) => {
        handleChange && handleChange(value);
    };

    return (
        <div>
            <PhoneInput
                country={'us'}
                value={value}
                onChange={change}
                preferredCountries={['ar']}
                prefix="+"
                enableLongNumbers={true}
                masks={{ ar: '... ...-....' }}
            />
        </div>
    );
};

export default PhoneNumber;
