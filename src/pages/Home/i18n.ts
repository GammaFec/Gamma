import { LanguageList } from "./../../i18next/config";
import i18next from "i18next";

i18next.addResources(LanguageList.SPANISH, "Home", {
    Title: "Encuentra a tu compañero ideal",
    SignUp: "Registarse",
    LogIn: "Iniciar sesión",
    ImageAlt: "Imagen de un perrx o gatx"
});

i18next.addResources(LanguageList.ENGLISH, "Home", {
    Title: "Find your ideal buddy",
    SignUp: "Sign up",
    LogIn: "Log in",
    ImageAlt: "Dog or Cat Image"
});
