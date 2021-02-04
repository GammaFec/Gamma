import React, { useState } from "react";

import Logo from "../../img/Logo-con-colores.svg";

import { StyledMainWrapper, StyledP } from "./styles";

const LoginPage = (props: any) => {
    const [inputAccountObj, setInputAccountValue] = useState({
        value: "",
        valid: false
    });

    const [inputPasswordObj, setInputPasswordValue] = useState({
        value: "",
        valid: false
    });

    const AccountInputHandler = (event: any) => {
        const newValue = event.target.value;

        return setInputAccountValue({
            ...inputAccountObj,
            value: newValue,
            valid: InputisValid(newValue)
        });
    };

    const PasswordInputHandler = (event: any) => {
        const newValue = event.target.value;

        return setInputPasswordValue({
            ...inputPasswordObj,
            value: newValue,
            valid: InputisValid(newValue)
        });
    };

    const InputisValid = (value: any) => {
        if (value.trim() === "") {
            return false;
        }
        if (value.trim().length < 6) {
            return false;
        }
        return true;
    };

    const loginButtonCLicked = () => {
        console.log("clicked!!!");
        if (inputAccountObj.valid && inputPasswordObj.valid) {
            //do something whith the form
        } else {
            return;
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
            <button onClick={() => loginButtonCLicked()}>Ingresar</button>
        </StyledMainWrapper>
    );
};

export default LoginPage;
