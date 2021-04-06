import i18next from "i18next";
import { LanguageList } from "../../../i18next/config";

i18next.addResources(LanguageList.SPANISH, "CardPet", {
    title: "Cerca de ti",
    month: "mes",
    year: "año",
    pluralMonth: "meses",
    pluralYear: "años"
});

i18next.addResources(LanguageList.ENGLISH, "CardPet", {
    title: "Around here",
    month: "month",
    year: "year",
    pluralMonth: "months",
    pluralYear: "years"
});
