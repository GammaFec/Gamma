import React, { useState } from "react";

import Button from "../../components/Button/index";
import { InputIsValid } from "./utils";

import Logo from "../../img/Logo-con-colores.svg";

import { StyledMainWrapper, StyledP } from "./styles";

const LoginPage = () => {
    const [inputAccountObj, setInputAccountValue] = useState({
        value: "",
        valid: false
    });

    const [inputPasswordObj, setInputPasswordValue] = useState({
        value: "",
        valid: false
    });

    const AccountInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.trim();

        return setInputAccountValue({
            ...inputAccountObj,
            value: newValue,
            valid: InputIsValid(newValue, true)
        });
    };

    const PasswordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.trim();

        return setInputPasswordValue({
            ...inputPasswordObj,
            value: newValue,
            valid: InputIsValid(newValue)
        });
    };

    const loginButtonCLicked = () => {
        if (inputAccountObj.valid && inputPasswordObj.valid) {
            //do something with the form Data
            console.log("clicked!!! El usuario o la Contraseña ES valida");
        } else {
            return console.log("clicked!! El usuario o la Contraseña NO ES valida");
        }
    };

    return (
        <StyledMainWrapper>
            <div>
                <img alt="logo" src={Logo}></img>
                <StyledP>Encuentra tu companero ideal</StyledP>
            </div>
            <form onSubmit={(event) => event.preventDefault}>
                <input
                    value={inputAccountObj.value}
                    onChange={(event) => AccountInputHandler(event)}
                    placeholder="Ingresa Tu Cuenta"></input>
                <input
                    value={inputPasswordObj.value}
                    onChange={(event) => PasswordInputHandler(event)}
                    placeholder="Contraseña"></input>
            </form>
            <Button variant={"primary"} onClick={() => loginButtonCLicked()}>
                Ingresar
            </Button>
        </StyledMainWrapper>
    );
};

export default LoginPage;
