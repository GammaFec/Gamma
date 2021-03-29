import { LanguageList } from "./../../i18next/config";
import i18next from "i18next";

i18next.addResources(LanguageList.SPANISH, "ContainerCard", {
    h1: "Cerca de ti"
});

i18next.addResources(LanguageList.ENGLISH, "ContainerCard", {
    h1: "Around here"
});
