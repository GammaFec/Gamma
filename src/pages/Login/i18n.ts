import i18next from "i18next";

import { LanguageList } from "./../../i18next/config";

i18next.addResources(LanguageList.SPANISH, "Login", {
    Title: "Encuentra tu compañero ideal",
    Login: "Ingresar",
    AccountInputPlaceholder: "Ingresa Tu Cuenta",
    PasswordInputPlaceholder: "Contraseña"
});

i18next.addResources(LanguageList.ENGLISH, "Login", {
    Title: "Find your ideal buddy",
    Login: "Log in",
    AccountInputPlaceholder: "Enter Your Account",
    PasswordInputPlaceholder: "Password"
});
