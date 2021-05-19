import { LanguageList } from "./../../i18next/config";
import i18next from "i18next";

i18next.addResources(LanguageList.SPANISH, "Login", {
    Title: "Encuentra tu compañero ideal",
    Login: "Ingresar"
});

i18next.addResources(LanguageList.ENGLISH, "Login", {
    Title: "Find your ideal buddy",
    Login: "Log in"
});
