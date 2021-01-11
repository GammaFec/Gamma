import React from "react";
import Logo from "../img/Logo.jpg";
import { GlobalStyle, StyledImg, StyledP } from "./Styles";

const Home = () => {
    return (
        <>
            <GlobalStyle />
            <div>
                <StyledImg src={Logo} />
                <StyledP>Adogtemos</StyledP>
            </div>
        </>
    );
};

export default Home;
