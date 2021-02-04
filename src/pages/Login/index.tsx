import React from "react";

import Logo from "../../img/Logo-con-colores.svg";

import { StyledMainWrapper, StyledP } from "./styles";

const LoginPage = ({
    loginButtonCLicked,
    inputOnChange,
    inputAccountValue,
    inputPasswordValue
}: any) => {
    return (
        <StyledMainWrapper>
            <div>
                <img alt="logo" src={Logo}></img>
                <StyledP>Encuentra tu companero ideal</StyledP>
            </div>
            <form onSubmit={(event) => event.preventDefault}>
                <input
                    value={inputAccountValue}
                    onChange={(event) => inputOnChange(event)}
                    placeholder="Cuenta"></input>
                <input
                    value={inputPasswordValue}
                    onChange={(event) => inputOnChange(event)}
                    placeholder="Password"></input>
            </form>
            <button onClick={() => loginButtonCLicked()}>Ingresar</button>
        </StyledMainWrapper>
    );
};

export default LoginPage;
