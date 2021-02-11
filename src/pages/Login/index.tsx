import React, { useState } from "react";
import Button from "../../components/Button/index";
import Input from "../../components/Input/index";
import { InputIsValid } from "./utils";
import Logo from "../../img/Logo-con-colores.svg";
import { StyledMainWrapper, StyledP } from "./styles";

const LoginPage: React.FC = () => {
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
        console.log(newValue);
        const newState = {
            ...inputAccountObj,
            value: newValue,
            valid: InputIsValid(newValue, true)
        };

        return setInputAccountValue(newState);
    };

    const PasswordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.trim();
        const newState = {
            ...inputPasswordObj,
            value: newValue,
            valid: InputIsValid(newValue)
        };

        return setInputPasswordValue(newState);
    };

    const loginButtonCLicked = () => {
        if (inputAccountObj.valid && inputPasswordObj.valid) {
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
            <form onSubmit={(event) => event.preventDefault}>
                <Input
                    id="LoginUser"
                    name="LoginUser"
                    onChange={(event) => AccountInputHandler(event)}
                    placeholder="Ingresa Tu Cuenta"
                    type="text"
                />
                <Input
                    id="LoginPassword"
                    name="LoginPassword"
                    onChange={PasswordInputHandler}
                    placeholder="Contraseña"
                    type="text"
                />
            </form>
            <Button onClick={() => loginButtonCLicked()} variant={"primary"}>
                Ingresar
            </Button>
        </StyledMainWrapper>
    );
};

export default LoginPage;
