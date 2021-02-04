import { log } from "console";
import React, { useState } from "react";

import Button from "../../components/Button/index";

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
        const newValue = event.target.value.trim();

        return setInputAccountValue({
            ...inputAccountObj,
            value: newValue,
            valid: InputIsValid(newValue, true)
        });
    };

    const PasswordInputHandler = (event: any) => {
        const newValue = event.target.value.trim();

        return setInputPasswordValue({
            ...inputPasswordObj,
            value: newValue,
            valid: InputIsValid(newValue)
        });
    };

    const InputIsValid = (value: any, isEmail: any = false) => {
        if (value === "") {
            return false;
        }
        if (value.length < 6 && !isEmail) {
            return false;
        }
        if (isEmail) {
            const redgex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            console.log(redgex.test(value));
            return redgex.test(value);
        }

        return true;
    };

    const loginButtonCLicked = () => {
        console.log("clicked!!!");
        if (inputAccountObj.valid && inputPasswordObj.valid) {
            //do something with the form
        } else {
            return alert("Usuario o Contraseña invalida");
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
