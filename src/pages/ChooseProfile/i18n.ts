import i18next from "i18next";

import { LanguageList } from "./../../i18next/config";

i18next.addResources(LanguageList.SPANISH, "ChooseProfile", {
    title: "Elige tu perfil deseado",
    description:
        "En PetMatch nos importas mucho, por eso selecciona que papel deseas tener en la aplicación para brindarte una experiencia única."
});

i18next.addResources(LanguageList.ENGLISH, "ChooseProfile", {
    title: "Choose your desired profile",
    description:
        "At PetMatch we care a lot about you, so select what role you want to have in the application to give you a unique experience."
});
