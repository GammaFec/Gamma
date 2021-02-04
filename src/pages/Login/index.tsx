import React from "react";

import Logo from "../../img/Logo-con-colores.svg";

import { StyledMainWrapper } from "./styles";

const LoginPage = () => {
    return (
        <StyledMainWrapper>
            <div>
                <img alt="logo" src={Logo}></img>
                <h2>Encuentra tu companero ideal</h2>
            </div>
            <form>
                <input placeholder="Cuenta"></input>
                <input placeholder="Password"></input>
            </form>
            <button>Ingresar</button>
        </StyledMainWrapper>
    );
};

export default LoginPage;
