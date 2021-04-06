import { LanguageList } from "./../../i18next/config";
import i18next from "i18next";

i18next.addResources(LanguageList.SPANISH, "ContainerCard", {
    title: "Cerca de ti",
    month: "mes",
    year: "año",
    pluralMonth: "meses",
    pluralYear: "años"
});

i18next.addResources(LanguageList.ENGLISH, "ContainerCard", {
    title: "Around here",
    month: "month",
    year: "year",
    pluralMonth: "months",
    pluralYear: "years"
});
