import i18next from "i18next";

import { LanguageList } from "../../i18next/config";

i18next.addResources(LanguageList.SPANISH, "PreLogin", {
    Title: "Encuentra a tu compañero ideal",
    LogIn: "Ingresar",
    SignUp: "Registrarse",
    ImageAlt: "Imagen de un perrx o gatx"
});

i18next.addResources(LanguageList.ENGLISH, "PreLogin", {
    Title: "Find your ideal buddy",
    LogIn: "Sign up",
    SignUp: "Register",
    ImageAlt: "Dog or Cat Image"
});
