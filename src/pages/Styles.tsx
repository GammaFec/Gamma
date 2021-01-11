import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
 box-sizing: border-box;
 padding:0;
 margin:0;
}
body{
 font-size: 25px;
 background-color:#ff8000;
 align-items: center;
 display: flex;
 height: 100vh;
 justify-content: center;
 width: 100%;
}
`;

export const StyledImg = styled.img`
    width: 200px;
    height: 140px;
    display: block;
    margin: auto;
`;

export const StyledP = styled.p`
    text-align: center;
    margin-top: 30px;
    font-weight: 900;
`;
