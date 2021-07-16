import React from "react";

import ReactDOM from "react-dom";

import "./i18next";
import GlobalStyle from "./common/styles/globalStyles";
import AppRouter from "./routes/AppRouter";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <AppRouter />
    </React.StrictMode>,
    document.getElementById("root")
);
