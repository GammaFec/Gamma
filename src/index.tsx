import React from "react";
import ReactDOM from "react-dom";
import "./i18next";
import AppRouter from "./routes/AppRouter";
import GlobalStyle from "./common/styles/globalStyles";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <AppRouter />
    </React.StrictMode>,
    document.getElementById("root")
);
