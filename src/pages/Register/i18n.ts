import i18next from "i18next";

import { LanguageList } from "./../../i18next/config";

i18next.addResources(LanguageList.SPANISH, "Register", {
    Title: "Registrate",
    Username: "Ingresa un nombre de usuario",
    Email: "Correo electrónico",
    Password: "Contraseña",
    Register: "Registrarse"
});

i18next.addResources(LanguageList.ENGLISH, "Register", {
    Title: "Register",
    Username: "Enter username",
    Email: "Email",
    Password: "Password",
    Register: "Register"
});
