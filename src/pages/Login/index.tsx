import { strict } from "assert";
import React, { useState } from "react";

import Logo from "../../img/Logo-con-colores.svg";

import { StyledMainWrapper, StyledP } from "./styles";

const LoginPage = (props: any) => {
    const [inputAccountValue, setInputAccountValue] = useState({ value: "" });

    const [inputPasswordValue, setInputPasswordValue] = useState({ value: "" });

    const loginButtonCLicked = () => {
        console.log("clicked!!!");
    };

    const AccountInputHandler = (event: any) => {
        const newValue = event.target.value;
        console.log(newValue);

        return setInputAccountValue({ value: newValue });
    };

    const PasswordInputHandler = (event: any) => {
        const newValue = event.target.value;
        console.log(newValue);

        return setInputPasswordValue({ value: newValue });
    };

    return (
        <StyledMainWrapper>
            <div>
                <img alt="logo" src={Logo}></img>
                <StyledP>Encuentra tu companero ideal</StyledP>
            </div>
            <form onSubmit={(event) => event.preventDefault}>
                <input
                    value={inputAccountValue.value}
                    onChange={(event) => AccountInputHandler(event)}
                    placeholder="Ingresa Tu Cuenta"></input>
                <input
                    value={inputPasswordValue.value}
                    onChange={(event) => PasswordInputHandler(event)}
                    placeholder="Contraseña"></input>
            </form>
            <button onClick={() => loginButtonCLicked()}>Ingresar</button>
        </StyledMainWrapper>
    );
};

export default LoginPage;
