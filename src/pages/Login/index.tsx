import React, { useState } from "react";
import Button from "../../components/Button/index";
import Input from "../../components/Input/index";
import { InputIsValid } from "./utils";
import Logo from "../../img/Logo.svg";
import { StyledMainWrapper, StyledP } from "./styles";

const LoginPage: React.FC = () => {
    const [userObj, setUserObj] = useState({
        value: "",
        valid: false
    });

    const [passwordObj, setPasswordObj] = useState({
        value: "",
        valid: false
    });

    const AccountInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.trim();
        const newState = {
            ...userObj,
            value: newValue,
            valid: InputIsValid(newValue, true)
        };

        return setUserObj(newState);
    };

    const PasswordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.trim();
        const newState = {
            ...passwordObj,
            value: newValue,
            valid: InputIsValid(newValue)
        };

        return setPasswordObj(newState);
    };

    const loginButtonClicked = () => {
        if (userObj.valid && passwordObj.valid) {
            //do something with the form Data
            console.log("clicked!!! El usuario y la Contraseña SON validos");
        } else {
            return console.log("clicked!! El usuario o la Contraseña NO ES valida");
        }
    };

    return (
        <StyledMainWrapper>
            <div>
                <img alt="logo" src={Logo}></img>
                <StyledP>Encuentra tu compañero ideal</StyledP>
            </div>
            <form onSubmit={(event) => event.preventDefault()}>
                <Input
                    id="LoginUser"
                    name="LoginUser"
                    onChange={AccountInputHandler}
                    placeholder="Ingresa Tu Cuenta"
                    type="text"
                    value={userObj.value}
                />
                <Input
                    id="LoginPassword"
                    name="LoginPassword"
                    onChange={PasswordInputHandler}
                    placeholder="Contraseña"
                    type="password"
                    value={passwordObj.value}
                />
                <Button onClick={() => loginButtonClicked()} variant={"primary"}>
                    Ingresar
                </Button>
            </form>
        </StyledMainWrapper>
    );
};

export default LoginPage;
